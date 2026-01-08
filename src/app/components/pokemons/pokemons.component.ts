import { Component } from '@angular/core';
import { Pokemon } from './pokemon.interface';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [
    {id: 1, name: "Bulbizarre", category: "Graine", type: "Plante/Poison", height: 0.7, weight: 6.9},
    {id: 2, name: "Herbizarre", category: "Graine", type: "Plante/Poison", height: 1, weight: 13},
    {id: 3, name: "Florizarre", category: "Graine", type: "Plante/Poison", height: 2, weight: 100},
    {id: 4, name: "Salamèche", category: "Lézard", type: "Feu", height: 0.6, weight: 8.5},
    {id: 5, name: "Reptincel", category: "Flamme", type: "Feu", height: 1.1, weight: 19},
    {id: 6, name: "Dracaufeu", category: "Flamme", type: "Feu/Vol", height: 1.7, weight: 90.5}
  ];
}
