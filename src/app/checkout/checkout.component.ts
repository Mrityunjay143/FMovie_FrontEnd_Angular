import { MoviesService } from './../services/movies.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

 username:any=localStorage.getItem("username");
 totalPrice:any=localStorage.getItem("TotalPrice");
 users:Array<User>=new Array<User>();
 res:any;

  constructor(private service:MoviesService) { }

  ngOnInit(): void {
  this.getUser();
  }
  getUser(){
    this.service.getUserByName(this.username).subscribe(data=>{
    
      this.res=data;
      this.users=this.res;
  },
  error => console.log(error));


}
backHome(){
  window.location.replace('/moviesList');
}
}
