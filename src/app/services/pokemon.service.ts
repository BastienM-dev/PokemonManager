import {Inject, Injectable} from '@angular/core';
import {Pokemon} from "../components/pokemons/pokemon.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private BASE_URL: string = "https://pokeapi.co/api/v2"

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) { }

  getPokemons(): Observable<any> {
    return this.http.get<any[]>(`${this.BASE_URL}/pokemon/`)
  }

  getPokemonDetail(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getGenerations(): Observable<any> {
    return this.http.get<any[]>(`${this.BASE_URL}/generation/`);
  }

}


