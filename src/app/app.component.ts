import { Component } from '@angular/core';
import { CommentService } from "./services/comments/comment.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElFoRo Message Board';
  
}
