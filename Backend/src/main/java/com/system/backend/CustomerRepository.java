package com.system.backend;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
    Customer findByEmail(String email);
    List<Customer> findByConfirmationCode(String confirmationCode);
}
