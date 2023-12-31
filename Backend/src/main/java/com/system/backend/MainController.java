package com.system.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static com.system.backend.Util.randomString;


import java.security.MessageDigest;


@Controller
@CrossOrigin
@RequestMapping(path = "/system")
public class MainController {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private PromotionRepository promotionRepository;
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private PaymentCardRepository paymentCardRepository;


    Emailer emailer = Emailer.getInstance();

    @PostMapping(path = "/add")
    public @ResponseBody Movies addNewMovie(@RequestBody Movies movie) {
       /* Movies movie = new Movies();
        //movie.setId(1);
        movie.setTitle(title);
        movie.setCategory(category);
        movie.setCast(cast);
        movie.setDirector(director);
        movie.setProducer(producer);
        movie.setSynopsis(synopsis);
        movie.setReviews(reviews);
        movie.setPoster_url(poster_url);
        movie.setTrailer_url(trailer_url);
        movie.setMpaa_rating(mpaa_rating);
        //movie.setShow_date(date);
        //movie.setShow_time(time);*/
        return movieRepository.save(movie);

    } //addNewMovie

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Movies> getAllMovies() {
        return movieRepository.findAll();
    }

    @GetMapping(path = "/getuser")
    public @ResponseBody Customer getUser(@RequestParam String email) {
        return customerRepository.findByEmail(email);
    }

    /**
     * Takes an email and password. Hashes the input password and if that password matches the stored hashed password, returns
     * the customer object as a response body. If they do not match, returns null;
     * @param email
     * @param password
     * @return
     */
    @GetMapping (path = "/login")
    public @ResponseBody Customer login(@RequestParam String email, @RequestParam String password) {
        boolean passwordIsCorrect = false;
        Customer customer = customerRepository.findByEmail(email);
        String hashedPassword = "";
        try{
            final MessageDigest digest = MessageDigest.getInstance("SHA-256");
            final byte[] hash = digest.digest(password.getBytes("UTF-8"));
            final StringBuilder hexString = new StringBuilder();
            for (int i = 0; i < hash.length; i++) {
                final String hex = Integer.toHexString(0xff & hash[i]);
                if(hex.length() == 1)
                    hexString.append('0');
                hexString.append(hex);
            }
            hashedPassword = hexString.toString();
        } catch(Exception ex){
            throw new RuntimeException(ex);
        }

        if (!customer.getPassword().equals(hashedPassword)) {
            customer = null;
        }

        return customer;

    }

    @GetMapping(path = "/getallusers")
    public @ResponseBody Iterable<Customer> getAllUsers() {
        return customerRepository.findAll();
    }

    @GetMapping(path = "/getAllPromotions")
    public @ResponseBody Iterable<Promotion> getAllPromotions() {
        return promotionRepository.findAll();
    }

    @GetMapping(path = "/checkPromoCode")
    public @ResponseBody Iterable<Promotion> checkPromoCode(@RequestParam String code) {
        return promotionRepository.findByCode(code);
    }

    @GetMapping(path = "/search")
    public @ResponseBody Iterable<Movies> getByTitle(@RequestParam String title) {
        return movieRepository.findByTitle(title);
    }

    @PostMapping(path = "/createaccount")
    public @ResponseBody Customer createAccount(@RequestBody Customer customer) {
        customer.setConfirmationCode(randomString(10));

        String password = customer.getPassword();
        try {
            final MessageDigest digest = MessageDigest.getInstance("SHA-256");
            final byte[] hash = digest.digest(password.getBytes("UTF-8"));
            final StringBuilder hexString = new StringBuilder();
            for (int i = 0; i < hash.length; i++) {
                final String hex = Integer.toHexString(0xff & hash[i]);
                if (hex.length() == 1)
                    hexString.append('0');
                hexString.append(hex);
            }
            customer.setPassword(hexString.toString());
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }

        //customer.setPassword(customer.getPassword())
        emailer.sendConfirmationEmail(customer, customer.getConfirmationCode());

        return customerRepository.save(customer);
    }

    @PostMapping(path = "/addaddress")
    public @ResponseBody Address addAddress(@RequestBody Address address) {
        return addressRepository.save(address);
    }

    @PostMapping(path = "/addpaymentcard")
    public @ResponseBody PaymentCard addPaymentCard(@RequestBody PaymentCard paymentCard) {
        return paymentCardRepository.save(paymentCard);
    }

    /**
     * Confirms a user's email address by checking the confirmation code
     *
     * @param confirmationCode the confirmation code to check
     * @return true if the confirmation code is valid, false otherwise
     */
    @PostMapping(path = "/confirm/{confirmationCode}")
    public @ResponseBody boolean confirmAccount(@PathVariable String confirmationCode) {
        //List<Customer> matchingCustomers = customerRepository.findByVerificationCode(confirmationCode);

        //TODO this is really poor code but it'S the simplest way I could think to do it without
        // making things super messy - maybe change later
        // iterates through customerRepository until it finds a customer with the given confirmation code
        for (Customer customer : customerRepository.findAll()) {
            if (customer.checkConfirmationCode(confirmationCode)) {
                customer.setStatus("ACTIVE"); // sets the user to verified
                customerRepository.save(customer); // saves the user to the database
                return true;
            }
        }
        return false;
    }


    /**
     * Updates a customer's profile in the database
     * Precondition: there should already be a customer with the given ID in the database
     *
     * @param updatedCustomerProfile the updated customer profile
     * @return the updated customer profile
     */
    @PostMapping(path = "/updateProfile")
    public @ResponseBody Customer updateProfile(@RequestBody Customer updatedCustomerProfile) {
        return customerRepository.save(updatedCustomerProfile);
    }

    /**
     * Creates a new promotion and sends it to all customers who signed up for promotions
     *
     * @param promotion the promotion to create
     * @return the promotion that was created
     */
    @PostMapping(path = "/createPromotion")
    public @ResponseBody Promotion createPromotion(@RequestBody Promotion promotion) {
        System.out.println(customerRepository.findByWantsPromotions(1));
        emailer.sendPromotionalEmail(promotion, customerRepository.findByWantsPromotions(1));
        promotionRepository.save(promotion); // store promotion in database
        return promotion;
    }


    /**
     * Updates a promotion in the database
     * Precondition: there should already be a promotion with the given ID in the database
     *
     * @param updatedPromotion the updated promotion
     * @return the updated promotion
     */
    @PostMapping(path = "/updatePromotion")
    public @ResponseBody Promotion updatePromotion(@RequestBody Promotion updatedPromotion) {
        return promotionRepository.save(updatedPromotion);
    }

    @PostMapping(path = "/checkout")
    public @ResponseBody Booking saveBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @GetMapping(path = "/customerbookings")
    public @ResponseBody Iterable<Booking> getBookingsByCustomerEmail(@RequestParam String customerEmail) {
        return bookingRepository.findByCustomerEmail(customerEmail);
    }

}
