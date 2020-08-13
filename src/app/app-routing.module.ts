import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { LoginScreenComponent } from "./login-screen/login-screen.component";

const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  { path: 'comment-section-component', component: CommentSectionComponent },
  { path: 'add-comment-component', component: AddCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
