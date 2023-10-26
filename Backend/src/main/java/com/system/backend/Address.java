package com.system.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Address {

    @Id
    private Integer id;
    private String street;
    private String city;
    private String state;
    private Integer zipcode;
}
