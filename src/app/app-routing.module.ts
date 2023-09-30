import { CardDetailsComponent } from './card-details/card-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'movies', component: MoviesComponent},
  {path:'moviesList', component:MoviesListComponent},
  {path: 'country/:keyword', component:MoviesListComponent},
  {path: 'genre/:keyword1', component: MoviesListComponent},
  {path: 'movie/:name',component:MoviesListComponent},
  {path:'movieDetails/:name1',component:MovieDetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart-details',component:CardDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
