import {Component, Inject} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
  generations: any[] = [];

  constructor(
    @Inject(PokemonService) private pokemonService: PokemonService
  ) {
    this.loadGenerations();
  }

  loadGenerations() {
    this.pokemonService.getGenerations().subscribe(data => {
      console.log(data);
      this.generations = data.results;
    });
  }
}
