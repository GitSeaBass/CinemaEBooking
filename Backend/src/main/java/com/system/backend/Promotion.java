package com.system.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Random;

import static java.time.LocalTime.now;

/**
 * Represents a promotion for a movie
 */

@Entity
public class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer promo_id;

    private final String code; // code for the promotion

    private final float percent; // discount percent for the promotion

    public Promotion(String code, float percent) {
        this.code = code;
        this.percent = percent;
    }

    public Promotion() {
        this.code = "";
        this.percent = 0;
    }

    public Integer getID() {
        return promo_id;
    }

    public void setID(Integer id) {
        this.promo_id = id;
    }



    public String getCode() {
        return code;
    }

    public float getPercent() {
        return percent;
    }
}
