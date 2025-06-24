import { Injectable } from '@angular/core';

export interface interfaceTareas {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
  hora: string;
}

@Injectable({
  providedIn: 'root',
})
export class Tarea {
  private tareas: interfaceTareas[] = [
    {
      id: 1,
      titulo: 'Tarea 1',
      descripcion: 'Descripción de la tarea 1',
      completada: false,
      hora: '08:00',
    },
  ];
  constructor() {}

  //obtener todas las tareas
  getTareas(): interfaceTareas[] {
    return this.tareas;
  }
}
