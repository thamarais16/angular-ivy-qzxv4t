import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubprofileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() { 
    // this.route.paramMap.subscribe(params => {
    //   let id = params.get('id');

    //   console.log(id);
    // })
    
    console.log(this.route.paramMap['id']);
  }

}