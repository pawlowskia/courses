package com.courses.courses.repository;

import com.courses.courses.entity.UserCourses;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// UserCoursesRepository.java
public interface UserCoursesRepository extends JpaRepository<UserCourses, Long> {
    List<UserCourses> findByUserId(Long userId);
    // Additional methods if needed
}
