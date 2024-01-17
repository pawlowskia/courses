package com.courses.courses.repository;

import com.courses.courses.entity.Position;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PositionRepository extends JpaRepository<Position, Long> {
    List<Position> findByChapterId(Long chapterId);
    // Additional methods if needed
}