import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
  generations: string[] = ["Géneration I", "Géneration II", "Géneration III", "Géneration IV", "Géneration V", "Géneration VI", "Géneration VII"]

}
