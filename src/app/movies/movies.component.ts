import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:any = [];

  constructor(public swapi:SwapiService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = [];
    this.swapi.getMovies('').subscribe((data: {}) => {
      console.log(data);
      this.movies = data;
    });
  }

}
