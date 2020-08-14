import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { User } from "../models/User";
import { LoginService } from "../services/login/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  user: User;

  onSubmit(){
    console.log(this.loginForm.value.name,this.loginForm.value.password);
    this.user = new User(this.loginForm.value.name,this.loginForm.value.password);
    console.log(this.user.name, this.user.password);


    this.loginService.postLogin(this.user).subscribe(data =>
    {
      console.log('response: ',data)
      if(data!=null){
        sessionStorage.setItem('user', data.name);
        sessionStorage.setItem('alias', data.alias);
        this.router.navigateByUrl('/comment-section-component');
      }
      
    });
    
    // location.reload(true);
  }

}
