import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  PokemonsService,
  PokemonTypeEnum,
} from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonName = '';
  pokemonType: PokemonTypeEnum | undefined;
  pokemonJustAdded = false;
  pokemons = this.pokemonsService.pokemons;
  errorMessage: string | undefined;
  PokemonTypeEnum = PokemonTypeEnum

  @ViewChild('pokemonTextInput') pokemonTextInput!: ElementRef;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {}

  addPokemon() {
    if (!this.pokemonType) {
      this.errorMessage = 'Il faut choisir un type de pokémon';
      return;
    }

    const pokemonAdded = this.pokemonsService.addPokemon(
      this.pokemonName,
      this.pokemonType,
    );
    if (!pokemonAdded) {
      this.errorMessage = 'Un pokemon avec ce nom existe déjà dans la liste';
      return;
    }

    this.pokemonName = '';

    this.pokemonJustAdded = true;
    setTimeout(() => {
      this.pokemonJustAdded = false;
    }, 3000);
  }
}
