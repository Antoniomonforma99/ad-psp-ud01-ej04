package com.salesianostriana.ud01ej042;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor @AllArgsConstructor
@Builder
public class GetProductoDto {

    private String nombre;
    private Double pvp;
    private String imagen;
    private String categoria;
}
