import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokeapiService} from '../pokeapi.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;
  specie: any;
  images: any[] = [];
  evolutions: any[] = [];
  description = '';

  constructor(private activeRoute: ActivatedRoute, private pokeapi: PokeapiService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: any) => {
      this.images = [];
      this.evolutions = [];
      this.description = '';

      this.pokeapi.getUrl(this.pokeapi.baseUrl + 'pokemon/' + params.id).subscribe((resp: any) => {
        this.pokemon = resp;
        // console.log(this.pokemon.sprites);
        Object.keys(this.pokemon.sprites).forEach(item => {
          if (this.pokemon.sprites[item] !== null) {
            this.images.push(this.pokemon.sprites[item]);
          }
        });
      });

      this.pokeapi.getUrl(this.pokeapi.baseUrl + 'pokemon-species/' + params.id).subscribe((resp: any) => {
        this.specie = resp;
        const desc = this.specie.flavor_text_entries.find((item) => {
          return item.language.name === 'en';
        });
        this.description = desc.flavor_text;
        this.pokeapi.getUrl(this.specie.evolution_chain.url).subscribe((res: any) => {
          this.addEvolution(res.chain);
        });
      });

    });
  }

  addEvolution(chain) {
    this.evolutions.push({
      name: chain.species.name,
      url: chain.species.url.replace('-species', '')
    });
    if (chain.evolves_to.length > 0) {
      this.addEvolution(chain.evolves_to[0]);
    }
  }

}
