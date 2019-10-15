import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {
  people:any=[];
  planet:any;
  vehicles:any=[];
  films:any=[];
  constructor(public swapi:SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getPlanet(this.route.snapshot.params['id']);
  }

  getPlanet(id){
  this.swapi.getPlanets(id).subscribe((data:any ) => {

    data.residents.forEach( resident=> {
      this.getPeople(resident.split('/')[5])
    });  
    
    data.films.forEach( film=> {
      this.getMovies(film.split('/')[5])
    });   

    this.planet = data;
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
      this.planet.push(data);
    });
  }


}