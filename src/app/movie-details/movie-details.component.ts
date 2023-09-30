import { MoviesService } from './../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movies } from './../model/movies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  role: any = localStorage.getItem("role");
  public movies: any = new Movies();
  movieName: any;
  public res: any;
  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleMovieNameSearch();
    });
  }
  handleMovieNameSearch() {
    this.movieName = this.route.snapshot.paramMap.get('name1');
    console.log("movie name" + this.movieName);
    this.movieService.getMovieByName(this.movieName).subscribe(data => {
      this.res = data;
      this.movies = this.res['content'];
      console.log("movie name" + this.movies);
    });


  }



}
