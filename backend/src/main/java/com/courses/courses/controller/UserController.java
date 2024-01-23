// src/main/java/com/courses/courses/controller/UserController.java
package com.courses.courses.controller;

import com.courses.courses.entity.Position;
import com.courses.courses.entity.User;
import com.courses.courses.entity.UserCourses;
import com.courses.courses.service.CourseService;
import com.courses.courses.service.StripeService;
import com.courses.courses.service.UserCoursesService;
import com.courses.courses.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stripe.exception.StripeException;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private final UserService userService;
    @Autowired
    private final UserCoursesService userCoursesService;
    @Autowired
    private final StripeService stripeService;
    @Autowired
    private CourseService courseService;

    @Autowired
    public UserController(UserService userService, UserCoursesService userCoursesService, StripeService stripeService) {
        this.userService = userService;
        this.userCoursesService = userCoursesService;
        this.stripeService = stripeService;
    }

    @GetMapping("/positions-for-first-course")
    public ResponseEntity<List<CourseService.PositionInfo>> getPositionsForFirstCourse() {
        List<CourseService.PositionInfo> positionsContent = courseService.getPositionsForFirstCourse();
        System.out.println("Positions content: " + positionsContent);
        return ResponseEntity.ok(positionsContent);
    }

    @GetMapping("/positions-for-second-course")
    public ResponseEntity<List<CourseService.PositionInfo>> getPositionsForSecondCourse() {
        List<CourseService.PositionInfo> positionsContent = courseService.getPositionsForSecondCourse();
        System.out.println("Positions content: " + positionsContent);
        return ResponseEntity.ok(positionsContent);
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

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody String jsonData) {
        System.out.println("Received user data: " + jsonData);
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            User loginRequest = objectMapper.readValue(jsonData, User.class);

            User existingUser = userService.getUserByEmail(loginRequest.getEmail());

            if (existingUser != null && existingUser.getPassword().equals(loginRequest.getPassword())) {
                System.out.println("Existing user: " + existingUser);
                return ResponseEntity.ok(existingUser);
            } else {
                System.out.println("User not found or incorrect password");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        } catch (Exception e) {
            System.out.println("Exception: " + e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{userId}/enrolled-courses")
    public ResponseEntity<List<UserCourses>> getUserCourses(@PathVariable Long userId) {
        System.out.println("Received user id: " + userId);
        List<UserCourses> userCourses = userCoursesService.getUserCoursesByUserId(userId);
        System.out.println("User courses: " + userCourses);
        if (!userCourses.isEmpty()) {
            System.out.println("Returning user courses");
            return ResponseEntity.ok(userCourses);
        } else {
            System.out.println("UserCourses not found");
            return ResponseEntity.ok(null);
        }
    }

//    @PostMapping("/{userId}/courses")
//    public ResponseEntity<String> enrollUserInCourse(@PathVariable Long userId, @RequestBody UserCourses userCourses) {
//        // Implement logic to check if the user can enroll in the course
//        // (e.g., check if the course exists and the user doesn't already have access)
//        // If conditions are met, save the user course entry
//        userCourses.setUser(userService.getUserById(userId));
//        userCoursesService.saveUserCourse(userCourses);
//        return ResponseEntity.ok("User enrolled in the course successfully");
//    }

    // src/main/java/com/courses/courses/controller/UserController.java

    @PostMapping("/{userId}/courses/create-checkout-session")
    public ResponseEntity<String> createCheckoutSession(@PathVariable Long userId, @RequestBody UserCourses userCourses) {
        try {
            String sessionId = stripeService.createCheckoutSession(userCourses.getCourseId(), String.valueOf(userId));
            return ResponseEntity.ok(sessionId);
        } catch (StripeException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating checkout session");
        }
    }

    @PostMapping("/courses/save-user-to-course")
    public ResponseEntity<String> saveUserToCourse(@RequestBody UserCourseRequest request) {
        Long userId = request.getUserId();
        Long courseId = request.getCourseId();
        System.out.println("Received user id: " + userId);

        try {
            userCoursesService.saveUserCourse(userId, courseId);
            System.out.println("User saved to course");
            return ResponseEntity.ok("User enrolled in the course successfully");

        } catch (Exception e) {
            System.out.println("Exception: " + e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("couldnt save user to course");
        }
    }

    @PostMapping("/courses/save-user-to-course-2")
    public ResponseEntity<String> saveUserToCourse2(@RequestBody UserCourseRequest request) {
        Long userId = request.getUserId();
        Long courseId = request.getCourseId();
        System.out.println("Received user id: " + userId);

        try {
            userCoursesService.saveUserCourse(userId, courseId);
            System.out.println("User saved to course");
            return ResponseEntity.ok("User enrolled in the course successfully");

        } catch (Exception e) {
            System.out.println("Exception: " + e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("couldnt save user to course");
        }
    }

//    @PostMapping("/courses/save-last-chapter")
//    public ResponseEntity<String> saveLastChapter(@RequestBody UserCourseRequest request) {
//        Long userId = request.getUserId();
//        Long courseId = request.getCourseId();
//
//        System.out.println("Received user id: " + userId);
//        System.out.println("Received course id: " + courseId);
//
//        try {
//            userCoursesService.saveLastChapter(userId, courseId, 1L);
//            System.out.println("Last chapter saved");
//            return ResponseEntity.ok("Last chapter saved successfully");
//
//        } catch (Exception e) {
//            System.out.println("Exception: " + e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("couldnt save last chapter");
//        }
//    }

//    @PostMapping("/courses/get-last-chapter")
//    public ResponseEntity<String> getLastChapter(@RequestBody UserCourseRequest request) {
//        Long userId = request.getUserId();
//        Long courseId = request.getCourseId();
//
//        System.out.println("Received user id: " + userId);
//        System.out.println("Received course id: " + courseId);
//
//        try {
//            userCoursesService.getLastChapter(userId, courseId);
//            System.out.println("Last chapter saved");
//            return ResponseEntity.ok("Last chapter saved successfully");
//
//        } catch (Exception e) {
//            System.out.println("Exception: " + e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("couldnt save last chapter");
//        }
//    }

    public static class UserCourseRequest {
        @Getter
        private Long userId;
        @Getter
        private Long courseId;
    }


    // Add more controller methods as needed
}
