package com.salesianostriana.ud01ej04;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor @Builder
public class GetAlumnoDto {

    private String nombre;

    private String apellidos;

    private String curso;

    private String direccion;

}
