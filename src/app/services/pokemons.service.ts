import { Injectable } from '@angular/core';

export interface Pokemon {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemons: Pokemon[] = [];

  addPokemon(pokemonName: string) {
    const newPokemon = {
      name: pokemonName,
    };
    this.pokemons.push(newPokemon);
  }

  constructor() { }
}
