import { MoviesService } from './services/movies.service';
import { Component, OnInit } from '@angular/core';
import { countries } from './model/countries';
import {genre} from './model/genre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'MoviePlan';
  role:any=localStorage.getItem("role");
  Countries:countries[]=[];
  Genre:genre[]=[];
  public res:any;
  public res1:any;
  
  ngOnInit(): void {
    this.getAllCountry();
    this.getAllGenre();
  }
  constructor(private movieService: MoviesService,private router: Router) { }
 
  getAllCountry(){
    this.movieService.getAllCountry().subscribe(data=>{
      console.log('Movie Categories=' + JSON.stringify(data));
      this.res=data;
      this.Countries=this.res;
    })

  }
  getAllGenre(){
    this.movieService.getAllGenre().subscribe(data=>{
      console.log('Genre Categories=' + JSON.stringify(data));
      this.res1=data;
      this.Genre=this.res1;
    })

  }
  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/movie/${value}`);
  }
  

}
