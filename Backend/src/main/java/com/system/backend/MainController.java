package com.system.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping(path="/demo")
public class MainController {
    @Autowired
    private MovieRepository movieRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewMovie(@RequestParam String title, @RequestParam String director) {
        Movies movie = new Movies();
        //movie.setId(1);
        movie.setTitle(title);
        movie.setDirector(director);
        movieRepository.save(movie);
        return "Saved";
    } //addNewMovie

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Movies> getAllMovies() {
        return movieRepository.findAll();
    }




}
