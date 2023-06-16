import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent {
  constructor(private router: Router) {}
  projetos: string[] = [];
}
