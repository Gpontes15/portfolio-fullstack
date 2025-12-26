package com.gabriel.portfolio_backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import java.time.LocalDate;

@Data
public class ProjectDTO {

    // Não colocamos o ID aqui, porque na criação quem gera é o banco

    @NotBlank(message = "O título é obrigatório") // Validação automática!
    private String title;

    @NotBlank(message = "A descrição é obrigatória")
    private String description;

    private String imageUrl;
    private String githubUrl;
    private String deployUrl;
    private LocalDate completionDate;
}