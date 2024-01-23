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

//    public void saveLastChapter(Long userId, Long courseId, Long chapterId) {
//        UserCourses userCourses = userCoursesRepository.findByUserIdAndCourseId(userId, courseId);
//        userCourses.setLastChapterId(chapterId);
//        userCoursesRepository.save(userCourses);
//    }
//
//    public void getLastChapter(Long userId, Long courseId) {
//        UserCourses userCourses = userCoursesRepository.findByUserIdAndCourseId(userId, courseId);
//        userCourses.getLastChapterId();
//    }

    // Additional methods if needed
}
