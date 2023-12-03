package com.system.backend;

public class Util {
    private static String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    public static String randomString(int length) {
        //TODO check length
        StringBuilder string = new StringBuilder();
        for (int i = 0; i < length; i++) {
            string.append(chars.charAt((int) (Math.random() * chars.length())));
        }
        return string.toString();
    }
}
