package com.system.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import static com.system.backend.Util.randomString;



import java.security.MessageDigest;
import java.util.Date;
import java.time.LocalTime;
import java.util.stream.StreamSupport;

import static com.system.backend.Util.randomString;


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
    public @ResponseBody Iterable<Customer> getUser(@RequestParam String email) {
        return customerRepository.findByEmail(email);
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
        Emailer emailer = new Emailer(); // TODO should only be one instance per database session
        customer.setConfirmationCode(randomString(10));

        String password = customer.getPassword();
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
            customer.setPassword(hexString.toString());
        } catch(Exception ex){
            throw new RuntimeException(ex);
        }

        //customer.setPassword(customer.getPassword())
        // TODO emailer not working
        // emailer.sendConfirmationEmail(customer, customer.getVerificationCode());
        return customerRepository.save(customer);
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
                // TODO show confirmation page
                return true;
            }
        }
        // TODO show customer not found page
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
        Emailer emailer = new Emailer(); // TODO should only be one instance per database session
        // TODO below line should only get customers who signed up for promotions
        emailer.sendPromotionalEmail(promotion, customerRepository.findAll());
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
    public @ResponseBody Promotion updateProfile(@RequestBody Promotion updatedPromotion) {
        return promotionRepository.save(updatedPromotion);
    }

    @PostMapping(path = "/testEmail")
    public void testEmail() {
        System.out.println("going to send email");
        Emailer emailer = new Emailer();
        System.out.println("created emailer");
        SimpleMailMessage message = new SimpleMailMessage();
        System.out.println("created message");
        message.setFrom("");
        message.setSubject("subject");
        message.setText("text");
        message.setTo("");

        System.out.println("sending email");
        emailer.send(message);
        System.out.println("sent email");
    }

    @PostMapping(path = "/testAccount")
    public void testAccount() {
        Customer customer = new Customer();
        customer.setFirstName("John");
        customer.setLastName("Doe");
        customer.setEmail("");
        customer.setPassword("");
        customer.setDateOfBirth("2000-01-01");
        customer.setStatus("PENDING");
        /*
        Address address = new Address();
        address.setStreet("123 Fake Street");
        address.setCity("Fake City");
        address.setState("Fake State");
        address.setZipcode(12345);
        customer.setAddress(address);*/
        createAccount(customer);

    }

    @PostMapping(path = "/checkout")
    public @ResponseBody Booking saveBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }
}
