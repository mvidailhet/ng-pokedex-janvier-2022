import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Pokemon, PokemonsService, PokemonTypeEnum } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent implements OnInit, OnDestroy {
  @Input() pokemon!: Pokemon;
  @ViewChild('nameInput') inputNameElt!: ElementRef;
  showEditTitleIcon = false;
  mouseIsOverEditBtn = false;
  isEditing = false;

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
    this.isEditing = true;
    setTimeout(() => {
      this.inputNameElt.nativeElement.focus();
    }, 0);
  }

  onInputNameBlur() {
    this.isEditing = false;
  }

  onInputNameKeyPress($event: KeyboardEvent) {
    console.log($event);
    if ($event.key === 'Enter') {
      this.onInputNameBlur();
    }
    if ($event.key === 'Escape') {
      console.log('should cancel');
    }
  }

  ngOnInit(): void {
  }
}
