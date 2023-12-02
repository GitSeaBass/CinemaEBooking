package com.system.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * Represents a promotion for a movie
 */

@Entity
public class Promotion {

    @Id
    private final String code; // code for the promotion
    private final int movieID; // movie associated with the promotion

    private final float discountPercent; // discount percent for the promotion

    public Promotion(Movies movie, String code, float discountPercent) {
        this.movieID = movie.getId();
        this.code = code;
        this.discountPercent = discountPercent;
    }

    public Promotion() {
        this.movieID = 0;
        this.code = "";
        this.discountPercent = 0;
    }


    public int getMovieID() {
        return movieID;
    }

    public String getCode() {
        return code;
    }

    public float getDiscountPercent() {
        return discountPercent;
    }
}
