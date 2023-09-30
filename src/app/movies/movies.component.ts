import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../model/movies';

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies1: any= Movies;



  constructor(private movieService: MoviesService, private router: Router) { 
    this.movies1=new Movies;
  }

  ngOnInit(): void {
  }

  addMovies(){
    this.movieService.addMovie(this.movies1).subscribe(res=>{
      this.movies1= res;
      // this.router.navigate(['/Home']);
    })
  }



}
