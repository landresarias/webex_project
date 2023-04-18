package com.example.webex_project_backend.controllers;

import com.example.webex_project_backend.exception.ResourceNotFoundException;
import com.example.webex_project_backend.models.Users;
import com.example.webex_project_backend.repositories.UserReposIntef;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
public class UserControllers {

    @Autowired
    private UserReposIntef userRI;

    @GetMapping("login")
    public List < Users > getUsersListUC() {
        return userRI.findAll();
    }

    @GetMapping("view/{id}")
    public ResponseEntity < Users > viewUserById(@PathVariable String email) {
        Users user = (Users) userRI.findByEmail(email);

        return ResponseEntity.ok(user);
    }


}
