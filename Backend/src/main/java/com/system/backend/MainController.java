package com.system.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.time.LocalTime;


@Controller
@CrossOrigin
@RequestMapping(path="/system")
public class MainController {
    @Autowired
    private MovieRepository movieRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewMovie(@RequestParam String title, @RequestParam String category,
                                            @RequestParam String cast, @RequestParam String director,
                                            @RequestParam String producer, @RequestParam String synopsis,
                                            @RequestParam String reviews, @RequestParam String poster_url,
                                            @RequestParam String trailer_url, @RequestParam String mpaa_rating
                                            /*@RequestParam Date date, @RequestParam LocalTime time*/) {
        Movies movie = new Movies();
        //movie.setId(1);
        movie.setTitle(title);
        movie.setCategory(category);
        movie.setCast(cast);
        movie.setDirector(director);
        movie.setProducer(producer);
        movie.setSynopsis(synopsis);
        movie.setReviews(reviews);
        movie.setPoster_url(poster_url);
        movie.setTrailer_url(trailer_url);
        movie.setMpaa_rating(mpaa_rating);
        //movie.setShow_date(date);
        //movie.setShow_time(time);

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
