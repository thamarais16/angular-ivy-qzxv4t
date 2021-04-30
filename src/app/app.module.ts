import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule  ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    NavbarComponent, 
    HomeComponent, 
    GithubprofileComponent, 
    NotFoundComponent, 
    GithubFollowersComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
