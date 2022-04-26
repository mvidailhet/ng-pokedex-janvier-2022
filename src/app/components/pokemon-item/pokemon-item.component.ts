import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Pokemon, PokemonsService, PokemonTypeEnum } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent implements OnInit, OnDestroy {
  @Input() pokemon!: Pokemon;
  showEditTitleIcon = false;
  mouseIsOverEditBtn = false;

  constructor(private pokemonsService: PokemonsService) {
  }

  ngOnDestroy(): void {
    console.log('pokemon item destroyed', this.pokemon.name);
  }

  deleteClick() {
    this.pokemonsService.deletePokemonByName(this.pokemon.name);
  }

  onTitleMouseEnter() {
    this.showEditTitleIcon = true;
  }

  onTitleMouseLeave() {
    this.showEditTitleIcon = false;
  }

  onEditBtnClick($event: MouseEvent) {
    $event.stopPropagation();
    console.log('editing!');
  }

  ngOnInit(): void {
  }
}
