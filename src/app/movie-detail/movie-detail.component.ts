import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie:any;
  constructor(public swapi:SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getMovie(this.route.snapshot.params['id']);
  }

  getMovie(id){
  this.swapi.getMovies(id).subscribe((data: {}) => {
    this.movie = data;
  });
}

}
