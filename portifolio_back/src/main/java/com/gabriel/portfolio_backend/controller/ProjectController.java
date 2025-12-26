package com.gabriel.portfolio_backend.controller;

import com.gabriel.portfolio_backend.dto.ProjectDTO;
import com.gabriel.portfolio_backend.model.Project;
import com.gabriel.portfolio_backend.service.ProjectService;
import org.springframework.beans.BeanUtils; // Importante!
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectService service;

    @GetMapping
    public List<Project> listAll() {
        return service.getAllProjects();
    }

    @PostMapping
    // @Valid ativa as anotações do DTO (como @NotBlank)
    public ResponseEntity<Project> create(@RequestBody @Valid ProjectDTO projectDTO) {
        
        // 1. Criamos a Entidade vazia
        Project projectEntity = new Project();
        
        // 2. Copiamos as propriedades do DTO para a Entidade automaticamente
        // (Eles precisam ter os nomes dos atributos IGUAIS para isso funcionar)
        BeanUtils.copyProperties(projectDTO, projectEntity);

        // 3. Salvamos
        Project savedProject = service.saveProject(projectEntity);

        // 4. Retornamos status 201 (Created)
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProject);
    }
}