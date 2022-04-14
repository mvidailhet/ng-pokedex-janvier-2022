import { Injectable } from '@angular/core';

export enum PokemonTypeEnum {
  FIRE = 'FIRE',
  GRASS = 'GRASS',
  WATER = 'WATER',
  POISON = 'POISON',
}
export interface Pokemon {
  name: string;
  type: PokemonTypeEnum;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  pokemons: Pokemon[] = [];

  addPokemon(pokemonName: string, pokemonType: PokemonTypeEnum) {
    if (this.pokemonExists(pokemonName)) return false;
    const newPokemon = {
      name: pokemonName,
      type: pokemonType,
    };
    this.pokemons.push(newPokemon);
    return true;
  }

  pokemonExists(pokemonName: string | undefined): boolean {
    return (
      this.pokemons.findIndex(
        (pokemon) => pokemon.name.toLowerCase() === pokemonName?.toLowerCase()
      ) > -1
    );
  }

  deletePokemon(pokemonIndex: number | undefined) {
    if (pokemonIndex === undefined)
      throw new Error('No pokemon index defined !');
    this.pokemons.splice(pokemonIndex, 1);
  }

  deletePokemonByName(nameToDelete: string | undefined) {
    const pokemonToDeleteIndex = this.pokemons.findIndex((pokemon) => {
      return pokemon.name === nameToDelete;
    });
    if (pokemonToDeleteIndex === -1)
      throw new Error('No pokemon to delete found !');
    this.deletePokemon(pokemonToDeleteIndex);
  }

  constructor() {}
}
