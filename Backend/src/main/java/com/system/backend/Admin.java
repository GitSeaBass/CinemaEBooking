package com.system.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Admin extends User {
    @Id
    private Integer id;

}
