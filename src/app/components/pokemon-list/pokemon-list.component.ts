import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonName = '';
  pokemons: string[] = [];
  pokemonJustAdded = false;
  faXmark = faXmark;

  constructor() {}

  ngOnInit(): void {}

  addPokemon() {
    this.pokemons.push(this.pokemonName);
    this.pokemonName = '';

    this.pokemonJustAdded = true;
    setTimeout(() => {
      this.pokemonJustAdded = false;
    }, 3000);
  }

  deletePokemon(pokemonIndex: number) {
    this.pokemons.splice(pokemonIndex, 1);
  }
}
