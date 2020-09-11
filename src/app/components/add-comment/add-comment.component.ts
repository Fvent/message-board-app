import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { CommentService } from "../../services/comments/comment.service";
import { Comment, CommentResponse } from "../../models/Comment";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent{

  constructor(private commentservice: CommentService) {}
  // addCommentForm: FormGroup;
  ngOnInit(){
    
  }

  addCommentForm: FormGroup = new FormGroup({
    user: new FormControl(''),
    comment: new FormControl(''),
  });

  comment: Comment;

  onSubmit(){
    console.log(sessionStorage.getItem('alias'),this.addCommentForm.value.comment);

    this.comment = new Comment(sessionStorage.getItem('alias'),this.addCommentForm.value.comment);

    console.log(this.comment.user, this.comment.comment);

    this.commentservice.addComment(this.comment).subscribe(data => {
        console.log('response: ',data)
    });
    
    // location.reload();
    
    // document.getElementsByClassName("form-control ta").item.call
  }
}
