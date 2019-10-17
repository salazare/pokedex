import {Component, OnInit, Input} from '@angular/core';
import {PokeapiService} from '../pokeapi.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokeUrl: string;
  public pokemon: any;

  constructor(private pokeapi: PokeapiService, private router: Router) {
  }

  ngOnInit() {
    this.pokeapi.getUrl(this.pokeUrl).subscribe((resp: any) => {
      // console.log('PokemonUrl: ', this.pokeUrl);
      // console.log('PokemonData: ', resp);
      this.pokemon = resp;
    });
  }

  goToDetails() {
    // console.log(this.pokeUrl);
    let res = this.pokeUrl.match(/\/pokemon\/(\d+)/);
    if (res.length === 2) {
      this.router.navigateByUrl('/pokemon/' + res[1]);
    }
  }

}
