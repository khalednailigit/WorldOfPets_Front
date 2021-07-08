import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
import { Responce } from 'src/app/model/responce';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  id: number;
  post: Post;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    console.log(this.id);

    this.postService.find(this.id).subscribe((data: Responce) => {
      console.log(data.rows[0]);

      this.post = data.rows[0];
    });
  }
}
