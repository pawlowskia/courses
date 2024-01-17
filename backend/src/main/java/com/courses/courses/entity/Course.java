package com.courses.courses.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

// Course.java
@Entity
@Table(name = "Course")
public class Course {
    // Getters and setters
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private Long id;

    @Setter
    @Getter
    @Column(name = "title", nullable = false)
    private String title;

    @Setter
    @Getter
    @Column(name = "description")
    private String description;

    @Setter
    @Getter
    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Setter
    @Getter
    @Column(name = "rating")
    private BigDecimal rating;

}