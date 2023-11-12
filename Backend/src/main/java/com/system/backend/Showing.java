package com.system.backend;

public class Showing {
    private final String date; // date of the showing

    private final String time; // time of the showing

    private final Movies associatedMovie; // movie associated with the showing

    private final String associatedTheater; // theater associated with the showing

    /**
     * Creates a new Showing object
     *
     * @param date              the date of the showing
     * @param time              the time of the showing
     * @param associatedMovie   the movie associated with the showing
     * @param associatedTheater the theater associated with the showing
     */
    public Showing(String date, String time, Movies associatedMovie, String associatedTheater) {
        this.date = date;
        this.time = time;
        this.associatedMovie = associatedMovie;
        this.associatedTheater = associatedTheater;
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
        return associatedMovie;
    }

    /**
     * Returns the theater associated with the showing
     *
     * @return the theater associated with the showing
     */
    public String getAssociatedTheater() {
        return associatedTheater;
    }
}
