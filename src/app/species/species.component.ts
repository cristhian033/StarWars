import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  species:any = [];
  id:any;
  constructor(public swapi:SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params['id']===undefined){
      this.id="";
    }else{
      this.id="?page="+this.route.snapshot.params['id'];;
    }
    this.getSpecies(this.id);
  }

  getSpecies(id) {
    this.swapi.getSpecies(id).subscribe((data: {}) => {
      console.log(data);
      this.species = data;
    });
  }

}
