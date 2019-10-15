import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { IndexComponent } from './index/index.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {title: 'Star Wars'}
  },
  {
    path: 'movies',
    component: MoviesComponent,
    data: {title: 'Star Wars Movies'}
  },
  {
    path: 'movies/',
    component: MoviesComponent,
    data: {title: 'Star Wars Movies'}
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
    data: { title: 'Movie Details' }
  },
  {
    path: 'people',
    component: PeopleComponent,
    data: {title: 'Star Wars Characters'}
  },
  {
    path: 'people/',
    component: PeopleComponent,
    data: {title: 'Star Wars Characters'}
  },
  {
    path: 'people/page/:id',
    component: PeopleComponent,
    data: {title: 'Star Wars Characters'}
  },
  {
    path: 'people/:id',
    component: PeopleDetailComponent,
    data: { title: 'Characters Details' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
