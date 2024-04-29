import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { APIData } from '../types';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-ssr-prefetch';
  http = inject(HttpClient);
  message = '';
  serverDateTime = 0;
  pokemonCount = 0;

  ngOnInit(): void {
      this.getPokemonCount();
  }

  getPokemonCount() {
    this.http.get<{count: number}>('https://pokeapi.co/api/v2/pokemon').subscribe(d=>{
      this.pokemonCount = d.count;
    })
  }

  getData(): void {
    this.http.get<APIData>('/api').subscribe((d) => {
      this.message = d.message;
      this.serverDateTime = d.datTime;
    });
  }
}
