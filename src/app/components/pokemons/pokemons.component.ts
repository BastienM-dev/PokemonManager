import { Component } from '@angular/core';
import { Pokemon } from './pokemon.interface';
import {CommonModule} from "@angular/common";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [];
  pokemonCount: number = 0;

  constructor(private pokemonService: PokemonService) {
    this.pokemons = this.pokemonService.getPokemons();
    this.pokemonCount = this.pokemonService.getPokemonCount();
  }
}
