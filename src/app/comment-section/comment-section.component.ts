import { Component, OnInit, OnChanges } from '@angular/core';
import { CommentService } from "../services/comments/comment.service";

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  public commentdata = [];
   constructor(private commentservice: CommentService) {}
   ngOnInit() {
      this.commentservice.getData().subscribe((data) => {
         this.commentdata = Array.from(Object.keys(data), k=>data[k]);
         console.log(this.commentdata);
      });
   }

   ngOnChanges(){
      this.commentservice.getData().subscribe((data) => {
         this.commentdata = Array.from(Object.keys(data), k=>data[k]);
         console.log(this.commentdata);
      });
   }
}
