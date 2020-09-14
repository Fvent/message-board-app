import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { LoginScreenComponent } from "./components/login-screen/login-screen.component";
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { MessagingComponent } from "./pages/messaging/messaging.component";

const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  // { path: 'comment-section-component', component: CommentSectionComponent },
  // { path: 'add-comment-component', component: AddCommentComponent},
  { path: 'app-messaging-component', component: MessagingComponent},
  { path: 'user-register-component', component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
