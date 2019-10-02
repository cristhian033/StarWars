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
    return this.http.get('https://swapi.co/api/films/'+id).pipe(
      map(this.extractData));
  }
}
