
import { Login, User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  addMovie( movies: Movies): Observable<Object> {
    console.log("name"+movies.name);
    return this.httpClient.post<Movies>(`${environment.apiUrl}user/movie`, movies);

  }
   
  getAllMovies(){
    return this.httpClient.get(`${environment.apiUrl}movie/movies`)
  }
  getAllCountry(){
    return this.httpClient.get(`${environment.apiUrl}country`)
  }
  getAllGenre(){
    return this.httpClient.get(`${environment.apiUrl}genre`)
  }
  getAllMovieByCountry(theKeyword:String)
  {
    return this.httpClient.get(`${environment.apiUrl}movie/country/${theKeyword}`)
  }
  getAllMovieByGenre(theKeyword:String)
  {
    return this.httpClient.get(`${environment.apiUrl}movie/genre/${theKeyword}`)
  }
  getLogin(login1:Login)
  { 
   // userName:tring=login1.username;
    return this.httpClient.get<User>(`${environment.apiUrl}users/${login1.username}`)
  }
  getMovieByName(name:any)
  {
    return this.httpClient.get(`${environment.apiUrl}movie/name/${name}`)
  }
  getUserByName(name:any)
  {
    return this.httpClient.get(`${environment.apiUrl}users/${name}`)
  }
}
