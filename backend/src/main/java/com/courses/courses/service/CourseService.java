package com.courses.courses.service;

import com.courses.courses.entity.Chapter;
import com.courses.courses.entity.Course;
import com.courses.courses.entity.Position;
import com.courses.courses.repository.ChapterRepository;
import com.courses.courses.repository.CourseRepository;
import com.courses.courses.repository.PositionRepository;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private ChapterRepository chapterRepository;

    @Autowired
    private PositionRepository positionRepository;

    public Course getCourseById(Long courseId) {
        return courseRepository.findById(courseId).orElse(null);
    }

    public List<PositionInfo> getPositionsForFirstCourse() {
        List<Chapter> chapters = chapterRepository.findByCourseId(1L);
        List<PositionInfo> positionsInfoList = new ArrayList<>();

        for (Chapter chapter : chapters) {
            List<Position> positions = positionRepository.findByChapterId(chapter.getId());
            for (Position position : positions) {
                PositionInfo positionInfo = new PositionInfo(position.getContent(), position.getFenNotation());
                positionsInfoList.add(positionInfo);
            }
        }
        return positionsInfoList;
    }

    public class PositionInfo {
        @Getter
        private String content;
        @Getter
        private String fen;

        public PositionInfo(String content, String fen) {
            this.content = content;
            this.fen = fen;
        }
        public PositionInfo() {
        }

        // getters and setters
    }
    // Additional methods if needed
}