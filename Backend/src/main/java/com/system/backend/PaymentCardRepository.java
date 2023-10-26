package com.system.backend;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PaymentCardRepository extends CrudRepository<PaymentCard, Integer> {

    List<PaymentCard> findByCardNumber(Integer cardNumber);
}
