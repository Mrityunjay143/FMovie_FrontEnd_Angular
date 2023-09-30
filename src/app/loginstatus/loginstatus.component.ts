
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginstatus',
  templateUrl: './loginstatus.component.html',
  styleUrls: ['./loginstatus.component.css']
})
export class LoginstatusComponent implements OnInit {
  username:any = localStorage.getItem('username');
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.username = null;
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    location.reload();
  }
}
