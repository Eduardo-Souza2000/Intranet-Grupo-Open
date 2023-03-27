package br.com.intranet.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "ramal", schema = "public")
public class Ramal {
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @Getter @Setter
    @Column (name = "nome", nullable = false, length = 50)
    private String nome;

    @Getter @Setter
    @Column (name = "numero", nullable = false,unique = true, length = 20)
    private String numero;

    @Getter @Setter
    @Column (name = "departamento", nullable = false, length = 30)
    private String departamento;

    @Getter @Setter
    @Column (name = "email", nullable = false,unique = true, length = 60)
    private String email;

    @Getter @Setter
    @Column (name = "loja", nullable = false, length = 30)
    private String loja;

}
