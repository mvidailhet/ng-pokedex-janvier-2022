import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { LoggingService } from 'src/app/services/logging.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonName = '';
  pokemonJustAdded = false;
  faXmark = faXmark;
  pokemons = this.pokemonsService.pokemons;
  errorMessage: string | undefined;

  @ViewChild('pokemonTextInput') pokemonTextInput!: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit(): void {}

  addPokemon() {
    const pokemonAdded = this.pokemonsService.addPokemon(this.pokemonName);
    if (!pokemonAdded) {
      this.errorMessage = 'Un pokemon avec ce nom existe déjà dans la liste';
      return;
    }

    this.pokemonName = '';

    this.pokemonJustAdded = true;
    setTimeout(() => {
      this.pokemonJustAdded = false;
    }, 3000);
    //this.loggingService.logItemCreated(newPokemon.name);
  }
}
