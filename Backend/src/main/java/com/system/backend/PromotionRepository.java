package com.system.backend;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PromotionRepository extends CrudRepository<Promotion, String> {
    List<Promotion> findByCode(String code);
}
