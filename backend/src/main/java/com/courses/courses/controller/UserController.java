// src/main/java/com/courses/courses/controller/UserController.java
package com.courses.courses.controller;

import com.courses.courses.entity.User;
import com.courses.courses.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable Long userId) {
        return userService.getUser(userId);
    }

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody String jsonData) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            User user = objectMapper.readValue(jsonData, User.class);
            System.out.println("Received user data: " + user);
            try {
                User savedUser = userService.saveUser(user);
                return ResponseEntity.ok(savedUser);
            } catch (DataIntegrityViolationException e) {
                System.out.println("Exception: " + e);
                // status 409 = conflict
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }
        } catch (IOException e) {
            System.out.println("JsonData: " + jsonData);
            e.printStackTrace();
        }
        return null;
    }


    // Add more controller methods as needed
}
