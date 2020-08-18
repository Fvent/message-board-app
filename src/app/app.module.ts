import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentService } from "./services/comments/comment.service";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentSectionComponent,
    AddCommentComponent,
    LoginScreenComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
