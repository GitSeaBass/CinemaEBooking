package com.system.backend;

/**
 * Represents a promotion for a movie
 */
public class Promotion {
    private final String subject; // subject of the promotion email

    private final String body; // body of the promotion email

    private final Movies associatedMovie; // movie associated with the promotion

    /**
     * Creates a new Promotion object
     *
     * @param subject         the subject of the promotion email
     * @param body            the body of the promotion email
     * @param associatedMovie the movie associated with the promotion
     */
    public Promotion(String subject, String body, Movies associatedMovie) {
        this.subject = subject;
        this.body = body;
        this.associatedMovie = associatedMovie;
    }

    /**
     * Returns the subject of the promotion email
     *
     * @return the subject of the promotion email
     */
    public String getSubject() {
        return subject;
    }

    /**
     * Returns the body of the promotion email
     *
     * @return the body of the promotion email
     */
    public String getBody() {
        return body;
    }


}
