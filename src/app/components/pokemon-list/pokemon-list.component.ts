import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface Pokemon {
  name: string;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonName = '';
  pokemons: Pokemon[] = [];
  pokemonJustAdded = false;
  faXmark = faXmark;

  currentRedColorIndex = 0;
  listIsRed = false;

  constructor() {}

  ngOnInit(): void {}

  increaseColor() {
    this.currentRedColorIndex += 50;
  }

  getCurrentColor() {
    return `rgb(${this.currentRedColorIndex % 250}, 255, 255)`;
  }

  addPokemon(pokemonTextInput: HTMLInputElement) {
    const newPokemon = { name: this.pokemonName };
    this.pokemons.push(newPokemon);
    this.pokemonName = '';

    this.pokemonJustAdded = true;
    setTimeout(() => {
      this.pokemonJustAdded = false;
    }, 3000);
    this.listIsRed = this.pokemons.length > 5;

    console.log(pokemonTextInput.value);


  }

  deletePokemon(pokemonIndex: number) {
    this.pokemons.splice(pokemonIndex, 1);
    this.listIsRed = this.pokemons.length > 5;
  }
}
