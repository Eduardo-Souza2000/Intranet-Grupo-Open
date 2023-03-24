package br.com.intranet.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "condutor", schema = "public")
public class Condutor {
    @Id
    @Getter @Setter
    @Column(name = "id", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Getter @Setter
    @Column(name = "nome", nullable = false, length = 100)
    private String nome;
}
