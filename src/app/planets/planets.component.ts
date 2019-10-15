import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets:any = [];
  id:any;
  constructor(public swapi:SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params['id']===undefined){
      this.id="";
    }else{
      this.id="?page="+this.route.snapshot.params['id'];;
    }
    this.getPlanets(this.id);
  }

  getPlanets(id) {
    this.swapi.getPlanets(id).subscribe((data: {}) => {
      console.log(data);
      this.planets = data;
    });
  }

}
