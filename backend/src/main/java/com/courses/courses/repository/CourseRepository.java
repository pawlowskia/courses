package com.courses.courses.repository;

import com.courses.courses.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    // Additional methods if needed
}