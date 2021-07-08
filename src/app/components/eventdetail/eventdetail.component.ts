import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.scss']
})
export class EventdetailComponent implements OnInit {
  @Input() post: Post;
  @Output() deletepost = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  deletePost(value: number) {
    console.log(value);

    this.deletepost.emit(value);
  }

}
