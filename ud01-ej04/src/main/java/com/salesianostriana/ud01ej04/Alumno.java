package com.salesianostriana.ud01ej04;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Data
@NoArgsConstructor
public class Alumno {

    @Id
    @GeneratedValue
    private Long id;
    private String nombre;
    private String apellido1;
    private String apellido2;
    private String tlf;
    private String email;

    @ManyToOne
    private Direccion direccion;

    @ManyToOne
    private Curso curso;

}
