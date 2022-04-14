import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent implements OnInit, OnDestroy {
  @Input('pokemonName') name: string | undefined;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnDestroy(): void {
    console.log('pokemon item destroyed', this.name);
  }

  deleteClick() {
    this.pokemonsService.deletePokemonByName(this.name);
    //this.pokemonsService.deletePokemon(this.index);
  }

  ngOnInit(): void {
  }
}
