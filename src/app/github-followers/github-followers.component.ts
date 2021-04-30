import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: Follower<string, number>[];
  
  constructor() { }

  ngOnInit() {
    this.followers = [
      new Follower("Thamarai",1),
      new Follower("Selvan", 2)
    ]
  }

}

class Follower<T, U>{
  name: T;
  id: U
  constructor(name: T, id: U){
    this.name = name;
    this.id = id;
  }
}