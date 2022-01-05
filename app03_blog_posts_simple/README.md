
```
ng new app03_blog_posts_simple
cd app03_blog_posts_simple
npm install bulma

ng generate component components/post
```

## Css scoping
Postoji globalni i lokalni skop (component scope). 
Globalni je styles.css. A lokalni je npr post.component.css
```
> .css
any-component.component.css
:host {
    /* Element itself */
}

parent.component.css
child-component-selector {
    width: 31%;
}

```

## Input data into component
```
>.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {

  @Input() someProperty = "";

  constructor() { }
  ngOnInit(): void {

  }
}
```

## Deploy on vercel
```
 vercel
Vercel CLI 23.1.2
? Set up and deploy “C:\mel\angular-udemy-stephen-grider\app03_blog_posts_simple”? [Y/n] y
? Which scope do you want to deploy to? regnerish-gmailcom
? Link to existing project? [y/N] n
? What’s your project’s name? blog-posts-simple
? In which directory is your code located? ./
? Want to override the settings? [y/N] n
```
