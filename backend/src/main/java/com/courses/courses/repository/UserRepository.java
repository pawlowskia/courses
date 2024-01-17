// src/main/java/com/courses/courses/repository/UserRepository.java
package com.courses.courses.repository;

import com.courses.courses.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
