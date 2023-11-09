package com.system.backend;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

/**
 * Represents an emailer object
 */
public class Emailer extends JavaMailSenderImpl {
    String myAddress = "cinemaebookinga8@gmail.com"; // the email address used to send emails

    /**
     * Creates a new Emailer object
     */
    public Emailer() {
        super();
        this.setHost("smtp.gmail.com");
        this.setPort(587);
        this.setUsername(myAddress);
        Properties props = this.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
    }

    /**
     * Sends a confirmation email to a user
     *
     * @param customer         the customer to send the email to
     * @param confirmationCode the confirmation code of the user
     */
    public void sendConfirmationEmail(Customer customer, String confirmationCode) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(myAddress);
        message.setTo(customer.getEmail());
        message.setSubject("Please Confirm your Email Address");
        message.setText("Hello, " + customer.getFirstName() + "! Thank you for creating an account at Cinema " +
                "Ebooking Cinemas. Please click the link below to confirm your email address:\n" +
                "http://localhost:8080/confirm?code=" + confirmationCode);
        this.send(message);
    }

    /**
     * Sends a promotional email to all customers who signed up for promotions
     *
     * @param promotion the promotion to send
     */
    public void sendPromotionalEmail(Promotion promotion) {
        Customer[] customers = {}; // TODO get list of all customers who signed up for promotions
        for (Customer customer : customers) {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(myAddress);
            message.setTo(customer.getEmail());
            message.setSubject(promotion.getSubject());
            message.setText(promotion.getBody());
            this.send(message);
        }
    }
}
