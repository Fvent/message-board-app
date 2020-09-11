import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { User } from "../../models/User";
import { RegisterService } from "../../services/register/register.service";
import { Router } from "@angular/router";
import { DataSharingService } from "../../services/data-sharing/data-sharing.service";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    alias: new FormControl(''),
    password: new FormControl(''),
  });

  user: User;

  onSubmit(){
    this.user = new User(this.registerForm.value.name, this.registerForm.value.alias, this.registerForm.value.password);

    this.registerService.postUser(this.user).subscribe(data =>
      {
        // console.log('response: ',data)
        if(data!=null){
          sessionStorage.setItem('user', data.name);
          sessionStorage.setItem('alias', data.alias);
          this.router.navigateByUrl('/comment-section-component');
          this.dataSharingService.isUserLoggedIn.next(true);
        }
        
      });
  }
}
