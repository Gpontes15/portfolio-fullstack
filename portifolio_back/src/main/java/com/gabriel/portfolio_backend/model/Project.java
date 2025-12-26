package com.gabriel.portfolio_backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String imageUrl;
    private String githubUrl;
    private String deployUrl;
    
    // Esse é o campo que o seu DataInitializer está tentando usar!
    private String techStack;

    private LocalDate completionDate;
}