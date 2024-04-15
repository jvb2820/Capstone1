package com.capstone.server.exception;

public class ApplicantAlreadyExistsException extends RuntimeException {
    public ApplicantAlreadyExistsException(String message) {
        super(message);
    }
}
