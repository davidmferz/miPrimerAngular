import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-imagenes-component',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './imagenes-component.html',
  styleUrl: './imagenes-component.css',
})
export class ImagenesComponent {}
