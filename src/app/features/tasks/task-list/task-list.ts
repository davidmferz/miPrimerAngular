import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { interfaceTareas, Tarea } from '../../../services/tareas';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {
  tareas: interfaceTareas[] = [];
  protected title = 'miPrimerAngular';

  constructor(private tareasServices: Tarea) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareas = this.tareasServices.getTareas();
  }
}
