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
            
            repository.deleteAll(); 

            // --- PROJETO 1: SERVICE DESK ---
            Project p1 = new Project();
            p1.setTitle("IT Service Desk System");
            p1.setDescription("Sistema de gestão de chamados desenvolvido para otimizar o fluxo de suporte técnico. Inclui gestão de SLA, usuários e relatórios.");
            p1.setTechStack("Java, Swing/JavaFX, MySQL");
            p1.setImageUrl("/chamados.png"); 
            p1.setCompletionDate(LocalDate.of(2023, 5, 20));
            repository.save(p1);

            // --- PROJETO 2: ORDER SYSTEM ---
            Project p2 = new Project();
            p2.setTitle("Order System - Event Driven Architecture");
            p2.setDescription("Microsserviços de alta performance para processamento de pedidos. Utiliza Apache Kafka para comunicação assíncrona.");
            p2.setGithubUrl("https://github.com/gpontes15/order-system-kafka");
            p2.setImageUrl("/pedidos.png");
            p2.setTechStack("Java Spring Boot, Apache Kafka, Docker");
            p2.setCompletionDate(LocalDate.now());
            repository.save(p2);
            
            // --- PROJETO 3: ÍNDICE REMISSIVO (NOVO!) ---
            Project p3 = new Project();
            p3.setTitle("Índice Remissivo - Estrutura de Dados");
            p3.setDescription("Implementação pura de algoritmos fundamentais (Árvore Binária, Hash Table e Lista Encadeada) para indexação eficiente de textos. Demonstra domínio de lógica e manipulação de arquivos em Java.");
            p3.setGithubUrl("https://github.com/Gpontes15/Projeto-ndice-Remissivo");
            p3.setTechStack("Java Core, Algoritmos, Estrutura de Dados");
            p3.setImageUrl("/file.svg"); // Usando um ícone padrão do Next.js por enquanto
            p3.setCompletionDate(LocalDate.of(2023, 11, 15));
            repository.save(p3);

            // --- PROJETO 4: O PRÓPRIO PORTFÓLIO ---
            Project p4 = new Project();
            p4.setTitle("Portfólio Full Stack Interativo");
            p4.setDescription("Aplicação Full Stack moderna desenvolvida do zero. Utiliza arquitetura desacoplada com API REST em Java e Frontend React. Integração contínua (CI/CD) com Deploy automático na nuvem.");
            p4.setTechStack("Java 17, Spring Boot, Next.js, PostgreSQL, Docker");
            p4.setGithubUrl("https://github.com/Gpontes15/portfolio-fullstack");
            p4.setDeployUrl("https://portfolio-fullstack-mauve-nu.vercel.app/");
            p4.setImageUrl("/indice-print.png"); 
            p4.setCompletionDate(LocalDate.now());
            repository.save(p4);

            // --- PROJETO 5: CADASTRO EVENT-DRIVEN (KAFKA) ---
            Project p5 = new Project();
            p5.setTitle("Sistema de Cadastro Event-Driven (Kafka)");
            p5.setDescription("Aplicação Full Stack desenhada com Arquitetura Orientada a Eventos. A API REST atua como Producer enviando dados para um tópico Kafka, enquanto um Consumer processa e persiste assincronamente no PostgreSQL. Ambiente orquestrado via Docker Compose.");
            p5.setGithubUrl("https://github.com/Gpontes15/cadastro_spring");
            p5.setTechStack("Java Spring Boot, Apache Kafka, Docker, React, PostgreSQL");
            p5.setImageUrl("/kafka-flow.png"); 
            p5.setCompletionDate(LocalDate.now());
            repository.save(p5);

            System.out.println("✅ Banco de dados atualizado com 4 projetos!");
        };
    }
}