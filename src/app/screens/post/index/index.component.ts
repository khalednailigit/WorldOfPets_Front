import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Responce } from 'src/app/model/responce';
import { PostService } from 'src/app/service/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  posts: Post[] = [];
  isLoading : boolean = true;
  email: string ;

  constructor(public postService: PostService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(data=>{
      this.posts = data.rows;
      this.isLoading = false;
      console.log(this.posts);
    })

    this.email =this.route.snapshot.paramMap.get('email');
    console.log(this.email);
    

  }

  deletePost(id){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.activity_id !== id);
         alert('Post deleted successfully!');
    })
  }
  reload(){
    this.isLoading = true;
    this.postService.getAll().subscribe(data=>{
      this.posts = data.rows;
      this.isLoading = false;
      console.log(this.posts);
    })
  }

}
