package com.courses.courses.repository;

import com.courses.courses.entity.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChapterRepository extends JpaRepository<Chapter, Long> {
    List<Chapter> findByCourseId(Long courseId);
    // Additional methods if needed
}
