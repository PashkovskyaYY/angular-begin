import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() post: any
  @Output() deleteEvent: EventEmitter<Post> = new EventEmitter<Post>()

  deletePost(post: Post) {
    this.deleteEvent.emit(post)
  }
}
