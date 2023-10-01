package com.system.backend;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface MovieRepository extends CrudRepository<Movies, Integer> {
    List<Movies> findByTitle(String title);
}
