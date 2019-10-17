import {Component, OnInit, Input} from '@angular/core';
import {PokeapiService} from '../pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokeUrl: string;
  public pokemon: any;

  constructor(private pokeapi: PokeapiService) {
  }

  ngOnInit() {
    this.pokeapi.getUrl(this.pokeUrl).subscribe((resp: any) => {
      console.log('PokemonUrl: ', this.pokeUrl);
      console.log('PokemonData: ', resp);
      this.pokemon = resp;
    });
  }

}
