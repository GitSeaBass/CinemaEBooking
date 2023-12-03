package com.system.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * Represents the booking, stores payment info, number of tickets and more.
 */
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Float total;
    private Integer numAdultTickets;
    private Integer numChildTickets;
    private Integer numSeniorTickets;
    private String promo;
    private String movieTitle;
    private String showDate;
    private String showTime;
    private String seatSelections; //Comma separated string
    //private Integer paymentCardId;
    private String customerEmail;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Float getTotal() {
        return total;
    }

    public void setTotal(Float total) {
        this.total = total;
    }

    public Integer getNumAdultTickets() {
        return numAdultTickets;
    }

    public void setNumAdultTickets(Integer numAdultTickets) {
        this.numAdultTickets = numAdultTickets;
    }

    public Integer getNumChildTickets() {
        return numChildTickets;
    }

    public void setNumChildTickets(Integer numChildTickets) {
        this.numChildTickets = numChildTickets;
    }

    public Integer getNumSeniorTickets() {
        return numSeniorTickets;
    }

    public void setNumSeniorTickets(Integer numSeniorTickets) {
        this.numSeniorTickets = numSeniorTickets;
    }

    public String getPromo() {
        return promo;
    }

    public void setPromo(String promo) {
        this.promo = promo;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public String getShowDate() {
        return showDate;
    }

    public void setShowDate(String showDate) {
        this.showDate = showDate;
    }

    public String getShowTime() {
        return showTime;
    }

    public void setShowTime(String showTime) {
        this.showTime = showTime;
    }

    public String getSeatSelections() {
        return seatSelections;
    }

    public void setSeatSelections(String seatSelections) {
        this.seatSelections = seatSelections;
    }

//    public Integer getPaymentCardId() {
//        return paymentCardId;
//    }
//
//    public void setPaymentCardId(Integer paymentCardId) {
//        this.paymentCardId = paymentCardId;
//    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }
}
