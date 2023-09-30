import { Cart } from './../model/cart';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../model/movies';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  public movies: any = Movies;
  movieName: any;
  public res: any;
  role: any = localStorage.getItem("role");
  CountrysearchMode: boolean = false;
  GenresearchMode: boolean = false;
  movienamesearchMode: boolean = false;
  constructor(private movieService: MoviesService, private route: ActivatedRoute, private service: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getMovies();
    });

  }

  private getMovies() {
    this.CountrysearchMode = this.route.snapshot.paramMap.has('keyword');
    console.log("print" + this.CountrysearchMode);

    if (this.CountrysearchMode) {
      this.handleCountryMovieSearch();
    }
    else {
      this.GenresearchMode = this.route.snapshot.paramMap.has('keyword1');
      console.log("print1" + this.GenresearchMode);
      if (this.GenresearchMode)
        this.handleGenreMovieSearch();
      else {
        this.movienamesearchMode = this.route.snapshot.paramMap.has('name');
        if (this.movienamesearchMode) {
          this.movieName = this.route.snapshot.paramMap.get('name');
          this.handleMovieNameSearch();
        }
        else {
          this.handleAllMovie();
        }
      }

    }

  }

  private handleCountryMovieSearch() {
    const keytype: any = this.route.snapshot.paramMap.get('keyword');
    this.movieService.getAllMovieByCountry(keytype).subscribe(data => {
      this.res = data;
      this.movies = this.res['content'];
    });
  }
  handleGenreMovieSearch() {
    const keytype: any = this.route.snapshot.paramMap.get('keyword1');
    this.movieService.getAllMovieByGenre(keytype).subscribe(data => {
      this.res = data;
      this.movies = this.res['content'];
    });
  }
  handleAllMovie() {
    this.movieService.getAllMovies().subscribe(data => {
      this.res = data;
      this.movies = this.res['content'];
    });
  }
  handleMovieNameSearch() {
    this.movieService.getMovieByName(this.movieName).subscribe(data => {
      this.res = data;
      this.movies = this.res['content'];
    });
  }
  addToCart(movie: Movies) {
    const cart: Cart = new Cart(movie);
    this.service.addToCart(cart);
  }

  // deleteMovie(movieId: number): Observable<any> {
  //   return this.http.delete(`${this.movieName}/${movieId}`);
  // }
}

