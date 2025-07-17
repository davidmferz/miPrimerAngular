import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//src/app/services/tareas.ts
export interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Data {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  private apiUrlTable = 'https://jsonplaceholder.typicode.com/comments';

  constructor() {}

  //obtener todas las tareas
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}?_limit=10`);
  }

  getTable(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.apiUrlTable}`);
  }
}
