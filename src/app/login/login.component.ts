import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: ''}

  constructor(private loginService: LoginServiceService, private router :Router){}

  public login(){
    this.loginService.login(this.user);
  }

  //Para não precisar fazer login toda hora
  ngOnInit() {
    if(sessionStorage.getItem("token") !=null 
    && sessionStorage.getItem("token")
    .toString().trim() != null){

      this.router.navigate(['home']);
    }

  }

}
