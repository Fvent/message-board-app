import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { DataSharingService } from "../app/services/data-sharing/data-sharing.service";

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
    CommonModule
  ],
  providers: [CommentService, DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
