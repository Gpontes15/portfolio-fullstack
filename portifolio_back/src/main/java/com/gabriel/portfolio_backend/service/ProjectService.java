package com.gabriel.portfolio_backend.service;

import com.gabriel.portfolio_backend.model.Project;
import com.gabriel.portfolio_backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository repository;

    public List<Project> getAllProjects() {
        return repository.findAll();
    }

    public Project saveProject(Project project) {
        return repository.save(project);
    }
}