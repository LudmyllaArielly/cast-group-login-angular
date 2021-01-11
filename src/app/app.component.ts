import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-cast-group';

  constructor(private router: Router){}

  ngOnInit(): void {
    if(sessionStorage.getItem("token") == null){
      this.router.navigate(['login']);
    }
  }

  public logout(){
    this.router.navigate(['login']);
    sessionStorage.clear();
   
  }


 
}
