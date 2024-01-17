package com.courses.courses.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "Position")
public class Position {
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "position_id")
    private Long id;

    @Setter
    @Getter
    @ManyToOne
    @JoinColumn(name = "chapter_id")
    private Chapter chapter;

    @Setter
    @Getter
    @Column(name = "fen_notation")
    private String fenNotation;

    @Setter
    @Getter
    @Column(name = "content")
    private String content;
}