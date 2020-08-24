import { Component, OnInit, OnChanges } from '@angular/core';
import { DataSharingService } from "../app/services/data-sharing/data-sharing.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElFoRo Message Board';
  isUserLoggedIn: boolean;

  constructor(private dataSharingService: DataSharingService, private router: Router){
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
  }

  // ngOnInit(){
  //   this.displaylogout = false;
  // }
  
  onLogout(){
    this.dataSharingService.isUserLoggedIn.next(false);
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('alias');
    this.router.navigateByUrl('');
  }
  
  
  
  
  
  
  



}
