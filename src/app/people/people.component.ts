import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people:any = [];
  id:any;
  constructor(public swapi:SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params['id']===undefined){
      this.id="";
    }else{
      this.id="?page="+this.route.snapshot.params['id'];;
    }
    this.getPeople(this.id);
  }

  getPeople(id) {
    this.people = [];
    this.swapi.getPeople(id).subscribe((data: {}) => {
      console.log(data);
      this.people = data;
    });
  }

}
