package com.gabriel.portfolio_backend;

import com.gabriel.portfolio_backend.model.Project;
import com.gabriel.portfolio_backend.repository.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(ProjectRepository repository) {
        return args -> {
            // ⚠️ LIMPEZA: Apaga tudo para recriar com as imagens novas
            repository.deleteAll(); 

            // Projeto 1: Service Desk
            Project p1 = new Project();
            p1.setTitle("IT Service Desk System");
            p1.setDescription("Sistema de gestão de chamados desenvolvido para otimizar o fluxo de suporte técnico. Inclui gestão de SLA, usuários e relatórios.");
            p1.setTechStack("Java, Swing/JavaFX, MySQL");
            p1.setImageUrl("/chamados.png"); // <--- O NOME EXATO DO ARQUIVO NA PASTA PUBLIC
            p1.setCompletionDate(LocalDate.of(2023, 5, 20));
            repository.save(p1);

            // Projeto 2: Order System
            Project p2 = new Project();
            p2.setTitle("Order System - Event Driven Architecture");
            p2.setDescription("Microsserviços de alta performance para processamento de pedidos. Utiliza Apache Kafka para comunicação assíncrona.");
            p2.setGithubUrl("https://github.com/gpontes15/order-system-kafka");
            p2.setImageUrl("/pedidos.png"); // <--- O NOME EXATO DO ARQUIVO NA PASTA PUBLIC
            p2.setCompletionDate(LocalDate.now());
            repository.save(p2);

            System.out.println("✅ Projetos atualizados com imagens!");
        };
    }
}