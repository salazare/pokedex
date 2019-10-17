import {Component, OnInit} from '@angular/core';
import {PokeapiService} from '../pokeapi.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {
  list: any[] = [];
  nextUrl: string;
  total: number;
  loading = false;

  constructor(private pokeapi: PokeapiService) {
  }

  ngOnInit() {
    this.getPokemons(this.pokeapi.baseUrl + 'pokemon');
  }

  getPokemons(url) {
    this.loading = true;
      this.pokeapi.getUrl(url).subscribe((resp: any) => {
        console.log('Resp:', resp);
        resp.results.forEach(item => {
          this.list.push(item);
        });
        this.total = resp.count;
        this.nextUrl = resp.next;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  loadMore() {
    this.getPokemons(this.nextUrl);
  }

}
