import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app03_blog_posts_simple';

  posts = [
    {
      title: "Mountains",
      image: "assets/mountain.jpeg",
      content: "Last time in Winipeg",
      handle: "tiny_frost_bites"
    },
    {
      title: "Trees",
      image: "assets/tree.jpeg",
      content: "Relax and keep green",
      handle: "green_light"
    },
    {
      title: "Biking",
      image: "assets/biking.jpeg",
      content: "Cant wait to ride a bike",
      handle: "bike_island"
    }
    
  ]

}
