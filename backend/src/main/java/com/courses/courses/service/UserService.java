// src/main/java/com/courses/courses/service/UserService.java
package com.courses.courses.service;

import com.courses.courses.entity.User;
import com.courses.courses.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUser(Long userId) {
        return userRepository.findById(userId).orElseThrow();
    }

    // Add more business logic methods as needed
}
