import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { IndexComponent } from './index/index.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';

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
  {
    path: 'planets',
    component: PlanetsComponent,
    data: {title: 'Star Wars Planets'}
  },
  {
    path: 'planets/',
    component: PlanetsComponent,
    data: {title: 'Star Wars Planets'}
  },
  {
    path: 'planets/page/:id',
    component: PlanetsComponent,
    data: {title: 'Star Wars Planets'}
  },
  {
    path: 'planets/:id',
    component: PlanetsDetailComponent,
    data: { title: 'Planets Details' }
  },
  {
    path: 'species',
    component: SpeciesComponent,
    data: {title: 'Star Wars Species'}
  },
  {
    path: 'species/',
    component: SpeciesComponent,
    data: {title: 'Star Wars Species'}
  },
  {
    path: 'species/page/:id',
    component: SpeciesComponent,
    data: {title: 'Star Wars Species'}
  },
  {
    path: 'species/:id',
    component: SpeciesDetailComponent,
    data: { title: 'Species Details' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
