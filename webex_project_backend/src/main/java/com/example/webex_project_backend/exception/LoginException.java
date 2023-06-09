package com.example.webex_project_backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class LoginException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public LoginException(String message) {
        super(message);
    }
}
