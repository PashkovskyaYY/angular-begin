import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-begin';
  inputValueStr = ""

  image = "https://www.worldatlas.com/r/w1200/upload/c7/91/96/shutterstock-109340948.jpg"

  changeTitleAndImg(): void{

    this.title = "Changed title"
    this.image = "https://www.wallpaperflare.com/static/953/87/674/fat-cat-lying-light-tortoiseshell-wallpaper.jpg"
  }

  inputValue(event: Event): void{
    //console.log("changed", event)
    this.inputValueStr = (event.target as HTMLInputElement).value;
  };
}
