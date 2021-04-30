import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule ,
    
    RouterModule.forRoot(
      [
        {
          path:'', 
          component:HomeComponent
        },
        {
          path:'followers/:userId', 
          component:GithubprofileComponent
        },
        {
          path:'posts', 
          component:PostComponent
        },
        {
          path:'followers', 
          component:GithubFollowersComponent
        },
        {
          path:'**', //wildcard
          component:NotFoundComponent
        },
      ]
    ),
    ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    NavbarComponent, 
    HomeComponent, 
    GithubprofileComponent, 
    NotFoundComponent, 
    GithubFollowersComponent, PostComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
