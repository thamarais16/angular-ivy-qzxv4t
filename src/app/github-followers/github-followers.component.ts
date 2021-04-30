import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {  
  followers: Follower<string, number>[];
  
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.followers = [
      new Follower("Thamarai",1),
      new Follower("Selvan", 2)
    ]
    //this.route.navigate(['/posts'])
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