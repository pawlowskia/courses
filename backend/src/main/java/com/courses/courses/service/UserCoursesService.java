package com.courses.courses.service;

import com.courses.courses.entity.UserCourses;
import com.courses.courses.repository.UserCoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


// UserCoursesService.java
@Service
public class UserCoursesService {
    @Autowired
    private UserCoursesRepository userCoursesRepository;

    public List<UserCourses> getUserCoursesByUserId(Long userId) {
        return userCoursesRepository.findByUserId(userId);
    }

    public void saveUserCourse(Long userId, Long courseId) {
        userCoursesRepository.save(new UserCourses(userId, courseId));
    }

    // Additional methods if needed
}
