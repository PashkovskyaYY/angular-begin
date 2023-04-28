import { Component } from '@angular/core';

export interface Post{
  id: number;
  title: string;
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-begin';
  inputValueStr = ""
  posts: Post[] = [
    {id: 1, title: 'First card', text: 'description'},
    {id: 2, title: 'Second card', text: 'description'},
    {id: 3, title: 'Third card', text: 'description'}
  ]

  deletePost(event: Post) {
    this.posts = this.posts.filter((post: Post) => post.id !== event.id)
  }
}
