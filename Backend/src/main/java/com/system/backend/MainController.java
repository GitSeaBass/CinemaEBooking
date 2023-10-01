package com.system.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@CrossOrigin
@RequestMapping(path="/system")
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

    @GetMapping(path="/search")
    public @ResponseBody Iterable<Movies> getByTitle(@RequestParam String title) {
        return movieRepository.findByTitle(title);
    }




}
