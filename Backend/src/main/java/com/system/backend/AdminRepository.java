package com.system.backend;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AdminRepository extends CrudRepository<Admin, Integer> {
    List<Admin> findByFirstName(String firstName);
}
