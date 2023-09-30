import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Login, User } from '../model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any=localStorage.getItem("username");
  login:Login=new Login();
  user:User=new User();
  res:any;
  constructor(private service: MoviesService,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  handleLogin() {
    this.service.getLogin(this.login).subscribe(
      data => {
        this.res=data;
       this.user = this.res; 
      

    // check data entered
    if(this.user.username == this.login.username){
      localStorage.setItem('username', this.user.username);
        localStorage.setItem('role',this.user.role);
      console.log("YES");
      window.location.replace("/")
    }
    else{
      console.log("No");
    }
      }
      ,error => console.log(error));

  }
  onSubmit()
  {
    console.log(this.login);
    this.handleLogin();
  }
}
