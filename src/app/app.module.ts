import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginstatusComponent } from './loginstatus/loginstatus.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartStatusComponent } from './cart-status/cart-status.component';
// import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviesListComponent,
    LoginComponent,
    RegisterComponent,
    LoginstatusComponent,
    MovieDetailsComponent,
    CardDetailsComponent,
    CheckoutComponent,
    CartStatusComponent,
    // MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
