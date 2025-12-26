package com.gabriel.portfolio_backend.repository;

import com.gabriel.portfolio_backend.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String> {
    // Não precisa escrever nada aqui, o Spring faz a mágica sozinho
}