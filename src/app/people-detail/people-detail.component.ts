import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../swapi.service';


@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  people:any;
  starships:any =[];
  planets:any;
  species:any= [];
  vehicles:any=[];
  films:any=[];
  constructor(public swapi:SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getCharacter(this.route.snapshot.params['id']);
  }

  getCharacter(id){
  this.swapi.getPeople(id).subscribe((data: {}) => {
    this.getPlanets(data.homeworld.split('/')[5])

    data.species.forEach( specie=> {
      this.getSpecies(specie.split('/')[5])
    });  


    data.vehicles.forEach( vehicle=> {
      this.getVehicles(vehicle.split('/')[5])
    });   

    data.starships.forEach( starship=> {
      this.getStarships(starship.split('/')[5])
    });   

    data.films.forEach( film=> {
      this.getMovies(film.split('/')[5])
    });   

    this.people = data;
  });
}

  getMovies(id){
    this.swapi.getMovies(id).subscribe((data: {}) => {
      //console.log(data)
      this.films.push(data);
    });
  }

  getStarships(id){
    this.swapi.getStarships(id).subscribe((data: {}) => {
      //console.log(data)
      this.starships.push(data);
    });
  }

  getPlanets(id){
    this.swapi.getPlanets(id).subscribe((data: {}) => {
      this.planets = data;
    });
  }

  getSpecies(id){
    this.swapi.getSpecies(id).subscribe((data: {}) => {
      //console.log(data);
      this.species.push(data);
    });
  }

  getVehicles(id){
    this.swapi.getVehicles(id).subscribe((data: {}) => {
      //console.log(data);
      this.vehicles.push(data);
    });
  }

}
/*

{{getStarships(2)}}
<div >
    {{starship.name}}
</div>
*/ 