import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }




  login(user){
    return this.http.post(AppConstants.baseLogin,JSON.stringify(user),
    { 
      headers: {'Content-Type': 'application/json'},
      responseType: 'text'
    })
    .subscribe(data => {

        var token = data;
        sessionStorage.setItem('token', token);
        console.log("Token: " + sessionStorage.getItem("token"));

        this.router.navigate(['home']);


    },
    error =>{
      console.error("Erro ao fazer login!")
      alert("Acesso negado!")
    }
    );

  }
}
