package com.system.backend;

public class Showing {
    private final String date; // date of the showing

    private final String time; // time of the showing

    private final int movieID; // movie associated with the showing

    private final int showroomID; // theater associated with the showing

    /**
     * Creates a new Showing object
     *
     * @param date              the date of the showing
     * @param time              the time of the showing
     */
    public Showing(String date, String time, int movieID, int showroomID) {
        this.date = date;
        this.time = time;
        this.movieID = movieID;
        this.showroomID = showroomID;
    }

    /**
     * Returns the date of the showing
     *
     * @return the date of the showing
     */
    public String getDate() {
        return date;
    }

    /**
     * Returns the time of the showing
     *
     * @return the time of the showing
     */
    public String getTime() {
        return time;
    }

    /**
     * Returns the movie associated with the showing
     *
     * @return the movie associated with the showing
     */
    public Movies getAssociatedMovie() {
        Movies movie = null;//TODO get movie with that ID from database
        return movie;
    }

    /**
     * Returns the theater associated with the showing
     *
     * @return the theater associated with the showing
     */
    public Showroom getAssociatedShowroom() {
        Showroom showroom = null;//TODO get Showroom with that ID from database
        return showroom;
    }
}
