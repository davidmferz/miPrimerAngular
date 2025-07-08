import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layaout',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './main-layaout.html',
  styleUrl: './main-layaout.css',
})
export class MainLayaout {}
