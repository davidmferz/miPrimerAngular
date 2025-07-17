import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Data, TareasService } from '../services/tareas';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrl: 'table-component.css',
  templateUrl: 'table-component.html',
  imports: [MatTableModule],
})
export class TableComponent implements OnInit {
  private tareasServices = inject(TareasService);
  public ELEMENT_DATA: Data[] = [];
  displayedColumns: string[] = ['postId', 'id', 'name', 'email', 'body'];
  dataSource = this.ELEMENT_DATA;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.tareasServices.getTable().subscribe((d) => {
      this.ELEMENT_DATA = d;
    });
  }
}
