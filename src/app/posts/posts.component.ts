import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: any;
  constructor(
    private service: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.service.search(this.route.snapshot.paramMap.get('id'))
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      });
    } else {
      this.service.findAll()
        .subscribe(response => {
          console.log(response);
          this.posts = response;
        });
    }

  }

}
