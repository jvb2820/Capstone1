package com.capstone.server.service;

public class ApplicantAlreadyExistsException extends RuntimeException {
    public ApplicantAlreadyExistsException(String message) {
        super(message);
    }
}
