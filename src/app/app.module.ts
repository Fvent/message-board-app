import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentService } from "./services/comments/comment.service";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentSectionComponent,
    AddCommentComponent,
    LoginScreenComponent
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
