package com.courses.courses.service;

import com.courses.courses.entity.Position;
import com.courses.courses.repository.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService {
    @Autowired
    private PositionRepository positionRepository;

    public List<Position> getPositionsByChapterId(Long chapterId) {
        return positionRepository.findByChapterId(chapterId);
    }

    // Additional methods if needed
}