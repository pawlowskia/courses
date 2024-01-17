package com.courses.courses.service;

import com.courses.courses.entity.Chapter;
import com.courses.courses.repository.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChapterService {
    @Autowired
    private ChapterRepository chapterRepository;

    public List<Chapter> getChaptersByCourseId(Long courseId) {
        return chapterRepository.findByCourseId(courseId);
    }

    // Additional methods if needed
}