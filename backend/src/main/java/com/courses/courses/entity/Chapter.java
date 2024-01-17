package com.courses.courses.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Chapter")
public class Chapter {
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chapter_id")
    private Long id;

    @Setter
    @Getter
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @Setter
    @Getter
    @Column(name = "title", nullable = false)
    private String title;

    @Setter
    @Getter
    @Enumerated(EnumType.STRING)
    @Column(name = "chapter_type", nullable = false)
    private ChapterType chapterType;


    public enum ChapterType {
        VIDEO, POSITION, Position, Video
    }
}