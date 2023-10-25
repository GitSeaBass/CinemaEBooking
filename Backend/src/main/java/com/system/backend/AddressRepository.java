package com.system.backend;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AddressRepository extends CrudRepository<Address, Integer> {
    List<Address> findAddressBy(String street);
}
