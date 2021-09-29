package com.salesianostriana.ud01ej042;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Producto {
    @Id
    @GeneratedValue
    private long id;

    private String nombre;

    private String desc;

    private Double pvp;

    @ElementCollection
    private List<String> imagenes;
    @ManyToOne
    private Categoria categoria;
}
