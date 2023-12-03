package com.system.backend;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

/**
 * Represents an emailer object
 */
public class Emailer extends JavaMailSenderImpl {
    private static Emailer instance; // the singleton instance of the Emailer
    private static String myAddress; // the email address used to send emails
    private static String myPassword;

    /**
     * Creates a new Emailer object
     */
    private Emailer() {
        super();
        Properties props = new Properties();
        try {
            props.load(new FileInputStream("./src/main/resources/private.properties"));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        myAddress = props.getProperty("email");
        myPassword = props.getProperty("password");
        this.setHost("smtp.mailgun.org");
        this.setPort(587);
        this.setUsername(myAddress);
        this.setPassword(myPassword);
        Properties mailProps = this.getJavaMailProperties();
        mailProps.put("mail.transport.protocol", "smtp");
        mailProps.put("mail.smtp.auth", "true");
        mailProps.put("mail.smtp.starttls.enable", "true");
        mailProps.put("mail.debug", "true");

    }

    static {
        instance = new Emailer();
    }

    public static Emailer getInstance() {
        return instance;
    }

    /**
     * Sends a confirmation email to a user
     *
     * @param customer         the customer to send the email to
     * @param confirmationCode the confirmation code of the user
     */
    public void sendConfirmationEmail(Customer customer, String confirmationCode) {
        MimeMessage message = createMimeMessage();
        try {

            MimeMessageHelper helper = new MimeMessageHelper(message, "utf-8");
            helper.setFrom(myAddress);
            helper.setTo(customer.getEmail());
            message.setSubject("Please Confirm your Email Address");
            helper.setText("Hello, " + customer.getFirstName() + "!\n\nThank you for creating an account at Cinema " +
                    "Ebooking Cinemas. Please click the link below to confirm your email address:<br><br>" +
                    "<a href=\"http://localhost:3000/emailconfirm/" + confirmationCode + "\">Click Here! </a>", true);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
        send(message);
    }

    /**
     * Sends a promotional email to all customers who signed up for promotions
     *
     * @param promotion the promotion to send
     */
    public void sendPromotionalEmail(Promotion promotion, Iterable<Customer> customers) {
        for (Customer customer : customers) {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(myAddress);
            message.setTo(customer.getEmail());
            message.setSubject(getPromotionEmailSubject(promotion));
            message.setText(getPromotionEmailBody(promotion));
            send(message);
        }
    }

    public static String getPromotionEmailSubject(Promotion promotion) {
        // TODO promotion.getMovie().getTitle()
        String movieTitle = "";
        return "Get " + promotion.getPercent() + "% off " + movieTitle + " tickets!";
    }

    public static String getPromotionEmailBody(Promotion promotion) {
        // TODO promotion.getMovie().getTitle()
        String movieTitle = "";
        return "As thanks for being a loyal customer, you can use code " + promotion.getCode() + " to get " +
                promotion.getPercent() + "% off " + movieTitle + " tickets!";
    }
}
