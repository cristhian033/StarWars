import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { IndexComponent } from './index/index.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
