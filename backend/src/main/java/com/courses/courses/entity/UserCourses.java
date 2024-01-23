package com.courses.courses.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

// UserCourses.java
@Entity
@Table(name = "UserCourses")
public class UserCourses {
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_course_id")
    private Long id;

    @Setter
    @Getter
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Setter
    @Getter
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @Setter
    @Getter
    @Column(name = "rating")
    private BigDecimal rating;

    @Setter
    @Getter
    @ManyToOne
    @JoinColumn(name = "last_chapter_id")
    private Chapter lastChapter;

    @Setter
    @Getter
    @Column(name = "purchase_date", nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime purchaseDate;

    public String getCourseId() {
        return (course != null && course.getId() != null) ? course.getId().toString() : null;
    }

    public UserCourses(Long userId, Long courseId) {
        this.user = new User();
        this.user.setId(userId);
        this.course = new Course();
        this.course.setId(courseId);
        this.purchaseDate = LocalDateTime.now(); // Set the purchase date to the current time
    }

    public UserCourses() {
        this.purchaseDate = LocalDateTime.now(); // Set the purchase date to the current time
    }

//    public void setLastChapterId(Long chapterId) {
//        this.lastChapter = new Chapter();
//        this.lastChapter.setId(chapterId);
//    }
//
//    public Long getLastChapterId() {
//        if (this.lastChapter != null) {
//            return this.lastChapter.getId();
//        }
//        return null;
//    }
    // Getters and setters
}
