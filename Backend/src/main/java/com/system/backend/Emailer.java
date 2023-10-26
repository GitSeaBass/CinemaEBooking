package com.system.backend;

import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

public class Emailer extends JavaMailSenderImpl {
    public Emailer() {
        super();
        this.setHost("smtp.gmail.com");
        this.setPort(587);
        this.setUsername("cinemaebookinga8@gmail.com");
        Properties props = this.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
    }

}
