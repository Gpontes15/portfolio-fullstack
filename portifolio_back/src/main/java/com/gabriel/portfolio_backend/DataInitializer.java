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
            // ⚠️ LIMPEZA: Apaga tudo para recriar com as informações atualizadas
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
            p2.setTechStack("Java Spring Boot, Apache Kafka, Docker"); // Adicionei TechStack que faltava aqui
            p2.setCompletionDate(LocalDate.now());
            repository.save(p2);
            
            // --- PROJETO 3: O PRÓPRIO PORTFÓLIO (NOVO!) ---
            Project p3 = new Project();
            p3.setTitle("Portfólio Full Stack Interativo");
            p3.setDescription("Aplicação Full Stack moderna desenvolvida do zero. Utiliza arquitetura desacoplada com API REST em Java e Frontend React. Integração contínua (CI/CD) com Deploy automático na nuvem.");
            p3.setTechStack("Java 17, Spring Boot, Next.js, PostgreSQL, Docker, Render & Vercel");
            p3.setGithubUrl("https://github.com/Gpontes15/portfolio-fullstack");
            p3.setDeployUrl("https://portfolio-fullstack-mauve-nu.vercel.app/");
            // DICA: Tire um print do seu site, salve como 'portfolio-print.png' na pasta public do Frontend!
            // Se não tiver a imagem ainda, ele vai mostrar o card cinza (sem imagem), o que não tem problema.
            p3.setImageUrl("/portfolio-print.png"); 
            p3.setCompletionDate(LocalDate.now());
            repository.save(p3);

            System.out.println("✅ Banco de dados atualizado com 3 projetos!");
        };
    }
}