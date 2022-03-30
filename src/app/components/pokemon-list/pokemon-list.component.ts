import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  nbCaught = 0;
  pokemonName = '';

  constructor() {}

  ngOnInit(): void {}

  addPokemon() {
    this.nbCaught += 1;
  }

  removePokemon() {
    if (this.nbCaught <= 0) return;
    this.nbCaught -= 1;
  }
}
