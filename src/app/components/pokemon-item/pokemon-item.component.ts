import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input('pokemonName') name: string | undefined;
  @Output() delete = new EventEmitter<void>();
  faXmark = faXmark;

  constructor() {
  }

  deleteClick() {
    this.delete.emit();
  }

  ngOnInit(): void {
    console.log(this.name);
  }

}
