package com.system.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.time.LocalTime;
import java.util.stream.StreamSupport;


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
        emailer.sendConfirmationEmail(customer, "123456"/* TODO generate and store confirmation code*/);
        return customerRepository.save(customer);
    }

    /**
     * Confirms a user's email address by checking the confirmation code
     *
     * @param confirmationCode the confirmation code to check
     * @return true if the confirmation code is valid, false otherwise
     */
    @PostMapping(path = "/confirm")
    public @ResponseBody boolean confirmAccount(@RequestBody String confirmationCode) {
        //TODO this is really poor code but it'S the simplest way I could think to do it without
        // making things super messy - maybe change later
        Customer matchingCustomer = StreamSupport.stream(customerRepository.findAll().spliterator(), false).filter(customer -> customer.checkVerificationCode(confirmationCode)).findFirst().orElse(null);
        if (matchingCustomer != null) { // if matching customer was found
            matchingCustomer.setStatus("ACTIVE"); // sets the user to verified
            customerRepository.save(matchingCustomer); // saves the user to the database
            // TODO show confirmation page
            return true;
        } else { // if matching customer was not found
            // TODO show customer not found page
            return false;
        }
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

    @PostMapping(path = "/checkout")
    public @ResponseBody Booking saveBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }
}
