import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PokemonsService, PokemonTypeEnum } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent implements OnInit, OnDestroy {
  @Input('pokemonName') name: string | undefined;
  @Input() type!: PokemonTypeEnum;
  @Input() creationDate!: Date;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnDestroy(): void {
    console.log('pokemon item destroyed', this.name);
  }

  deleteClick() {
    this.pokemonsService.deletePokemonByName(this.name);
  }

  ngOnInit(): void {
  }
}
