import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getMovies(id): Observable<any> {
    return this.http.get('https://swapi.co/api/films/'+id+'?a=5').pipe(
      map(this.extractData));
  }

  getPeople(id): Observable<any> {
    return this.http.get('https://swapi.co/api/people/'+id).pipe(
      map(this.extractData));
  }

  getSpecies(id): Observable<any> {
    return this.http.get('https://swapi.co/api/species/'+id).pipe(
      map(this.extractData));
  }

  getPlanets(id): Observable<any> {
    return this.http.get('https://swapi.co/api/planets/'+id).pipe(
      map(this.extractData));
  }

  getStarships(id): Observable<any> {
    return this.http.get('https://swapi.co/api/starships/'+id).pipe(
      map(this.extractData));
  }

  getVehicles(id): Observable<any> {
    return this.http.get('https://swapi.co/api/vehicles/'+id).pipe(
      map(this.extractData));
  }
}
