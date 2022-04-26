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
  initialPokemonName: string | undefined;

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
    this.initialPokemonName = this.pokemon.name;
    setTimeout(() => {
      this.inputNameElt.nativeElement.focus();
    }, 0);
  }

  onInputNameBlur($event?: FocusEvent) {
    if ($event?.relatedTarget) {
      const btnElement: HTMLElement = $event?.relatedTarget as HTMLElement;
      if (btnElement.innerText === 'Annuler') {
        return;
      }
    }

    this.isEditing = false;
  }

  cancelEdit() {
    console.log('cancel edit');
    if (!this.initialPokemonName) return;
    this.pokemon.name = this.initialPokemonName;
    this.onInputNameBlur();
  }

  onInputNameKeyPress($event: KeyboardEvent) {
    if ($event.key === 'Enter') {
      this.onInputNameBlur();
    }
    if ($event.key === 'Escape') {
      this.cancelEdit();
    }
  }

  ngOnInit(): void {
  }
}
