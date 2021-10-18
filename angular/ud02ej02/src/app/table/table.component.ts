import { Component, OnInit } from '@angular/core';

export interface Alumno {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;
  curso: number;
}

const ALUMN_DATA: Alumno[] = [
  { id: 1, nombre: 'Antonio', apellidos: 'Montero García', edad: 21, curso: 2 },
  { id: 2, nombre: 'Manuel', apellidos: 'Rodriguez Chico', edad: 22, curso: 2 },
  { id: 3, nombre: 'Rafael', apellidos: 'Martínez Irala', edad: 42, curso: 1 },
  { id: 4, nombre: 'Miguel', apellidos: 'Campos', edad: 18, curso: 3 }
]


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  displayedColumns: string[] = ['nombre', 'apellidos', 'edad', 'curso', 'delete', 'edit'];
  dataSource = ALUMN_DATA;

  constructor() { }

  ngOnInit(): void {

  }
}

