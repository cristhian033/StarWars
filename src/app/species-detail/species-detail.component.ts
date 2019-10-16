import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css']
})
export class SpeciesDetailComponent implements OnInit {
  people:any=[];
  planet:any;
  specie:any;
  films:any=[];
  constructor(public swapi:SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getSpecie(this.route.snapshot.params['id']);
  }

  getSpecie(id){
  this.swapi.getSpecies(id).subscribe((data:any ) => {
    this.getPlanets(data.homeworld.split('/')[5])

    data.people.forEach( character=> {
      this.getPeople(character.split('/')[5])
    });  
 
    data.films.forEach( film=> {
      this.getMovies(film.split('/')[5])
    });   

    this.specie = data;
  });
}

  getMovies(id){
    this.swapi.getMovies(id).subscribe((data: {}) => {
      this.films.push(data);
    });
  }

  getPeople(id){
    this.swapi.getPeople(id).subscribe((data: {}) => {
      this.people.push(data);
    });
  }

  getPlanets(id){
    this.swapi.getPlanets(id).subscribe((data: {}) => {
      this.planet = data;
    });
  }


}