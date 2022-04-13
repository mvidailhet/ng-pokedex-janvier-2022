import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent implements OnInit, OnDestroy {
  @Input('pokemonName') name: string | undefined;
  @Input() index: number | undefined;
  faXmark = faXmark;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnDestroy(): void {
    console.log('pokemon item destroyed', this.name);
  }

  deleteClick() {
    console.log(this.index);
    this.pokemonsService.deletePokemon(this.index);
  }

  ngOnInit(): void {
    console.log(this.index);
  }
}
