import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { User } from "../../models/User";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    
    private registerurl = environment.commentsurl+'/registeruser';

    constructor(private http: HttpClient) {}

    postUser(user: User): Observable<any> {
        return this.http.post<User>(this.registerurl, user, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
    }
}