package com.system.backend;

/**
 * Represents a promotion for a movie
 */
public class Promotion {
    private final Movies movie; // movie associated with the promotion
    private final String code; // code for the promotion
    private final float discountPercent; // discount percent for the promotion


    /**
     * @param movie
     * @param code
     * @param discountPercent
     */
    public Promotion(Movies movie, String code, float discountPercent) {
        this.movie = movie;
        this.code = code;
        this.discountPercent = discountPercent;
    }


    public Movies getMovie() {
        return movie;
    }

    public String getCode() {
        return code;
    }

    public float getDiscountPercent() {
        return discountPercent;
    }
}
