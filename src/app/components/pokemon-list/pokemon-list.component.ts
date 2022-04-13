import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface Pokemon {
  name: string;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  pokemonName = '';
  pokemons: Pokemon[] = [];
  pokemonJustAdded = false;
  faXmark = faXmark;

  @ViewChild('pokemonTextInput') pokemonTextInput!: ElementRef;

  currentRedColorIndex = 0;
  listIsRed = false;

  constructor() {


  }
  ngAfterViewInit(): void {
    console.log(this.pokemonTextInput.nativeElement.value);
  }

  ngOnInit(): void {
    console.log(this.pokemonTextInput);
  }

  increaseColor() {
    this.currentRedColorIndex += 50;
  }

  getCurrentColor() {
    return `rgb(${this.currentRedColorIndex % 250}, 255, 255)`;
  }

  addPokemon(pokemonTextInput: HTMLInputElement) {
    const newPokemon = { name: this.pokemonName };
    this.pokemons.push(newPokemon);
    this.pokemonName = '';

    this.pokemonJustAdded = true;
    setTimeout(() => {
      this.pokemonJustAdded = false;
    }, 3000);
    this.listIsRed = this.pokemons.length > 5;
  }

  deletePokemon(pokemonIndex: number) {
    this.pokemons.splice(pokemonIndex, 1);
    this.listIsRed = this.pokemons.length > 5;
  }
}
