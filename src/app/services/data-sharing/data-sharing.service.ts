import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(){
        if(sessionStorage.getItem('user')!== null){
            this.isUserLoggedIn.next(true);
        }
        else{
            this.isUserLoggedIn.next(false);
        }
    }
}