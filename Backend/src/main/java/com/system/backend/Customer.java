package com.system.backend;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "customer_id")
    private Integer customer_id;
    //@Column (name = "first_name")
    private String first_Name;
    //@Column (name = "last_name")
    private String last_Name;
    //@Column (name = "email")
    private String email;
    //@Column (name = "password")
    private String password;
    //@Column (name = "date_of_birth")
    private String date_of_birth;
    //@Column (name = "status")
    private String status;

    private String confirmationCode;
    private int wantsPromotions;

    @OneToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "address_address_id", nullable = true)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Address address;


    public Integer getId() {
        return customer_id;
    }

    public void setId(Integer customer_id) {
        this.customer_id = customer_id;
    }

    public String getFirstName() {
        return first_Name;
    }

    public void setFirstName(String firstName) {
        this.first_Name = firstName;
    }

    public String getLastName() {
        return last_Name;
    }

    public void setLastName(String lastName) {
        this.last_Name = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDateOfBirth() {
        return date_of_birth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.date_of_birth = dateOfBirth;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public void setConfirmationCode(String confirmationCode) {
        this.confirmationCode = confirmationCode;
    }

    public String getConfirmationCode() {
        return confirmationCode;
    }

    public boolean checkConfirmationCode(String providedCode) {
        return providedCode.equals(confirmationCode);
    }

    public int getWantsPromotions() {
        return wantsPromotions;
    }

    public void setWantsPromotions(int wantsPromotions) {
        this.wantsPromotions = wantsPromotions;
    }
}
