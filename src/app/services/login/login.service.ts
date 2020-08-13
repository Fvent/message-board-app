import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { User } from "../../models/User";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private loginurl = environment.commentsurl+'/userlogin';
 
    constructor(private http: HttpClient) { }
 
    postLogin(user: User): Observable<any>{
       return this.http.post<User>(this.loginurl, user, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
    }

}