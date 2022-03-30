import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  nbCaught = 0;
  pokemonName = '';
  pokemons: string[] = [];
  pokemonJustAdded = false;

  constructor() {}

  ngOnInit(): void {}

  addPokemon() {
    this.nbCaught += 1;
    this.pokemons.push(this.pokemonName);
    this.pokemonName = '';

    this.pokemonJustAdded = true;
    setTimeout(() => {
      this.pokemonJustAdded = false;
    }, 3000);
  }

  removePokemon() {
    if (this.nbCaught <= 0) return;
    this.nbCaught -= 1;
  }
}
