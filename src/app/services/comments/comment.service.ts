import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Comment } from "../../models/Comment";
import { Observable } from 'rxjs';

// @Injectable({
//    providedIn: 'root'
// })

@Injectable()
export class CommentService {

   
   private allcommentsurl = environment.commentsurl+'/allcomments';
   private addcommenturl = 'http://localhost:9000/forumapp/addcomment';

   constructor(private http: HttpClient) { }

   getData() {
      return this.http.get(this.allcommentsurl);
   }

   addComment(comment: Comment): Observable<any>{
      return this.http.post<Comment>(this.addcommenturl, comment, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
   }
}