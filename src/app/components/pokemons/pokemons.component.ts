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
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      console.log(data);
      this.pokemons = data.results;
      this.pokemonCount = data.count;
      this.getPokemonDetails();
    })
  }

  getPokemonDetails(): void {
    this.pokemons.forEach(pokemon => {
      this.pokemonService.getPokemonDetail(pokemon.url).subscribe(detail => {
        console.log('détail reçu :', detail);
        pokemon.height = detail.height;
        pokemon.weight = detail.weight;
        pokemon.sprites = detail.sprites;
      })
    })
  }

}
