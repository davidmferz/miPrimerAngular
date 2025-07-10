import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService, Task } from '../../../services/tareas';
import { MatListModule } from '@angular/material/list';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent implements OnInit {
  private tareasServices = inject(TareasService);
  public tasks: Task[] = [];

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareasServices.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
