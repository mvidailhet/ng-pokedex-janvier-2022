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

  constructor() {}

  ngOnInit(): void {}

  addPokemon() {
    this.nbCaught += 1;
    this.pokemons.push(this.pokemonName);
    console.log(this.pokemons);
  }

  removePokemon() {
    if (this.nbCaught <= 0) return;
    this.nbCaught -= 1;
  }
}
