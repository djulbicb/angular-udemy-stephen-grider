import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() title = "";
  @Input() content = "";
  @Input() image = "";
  @Input() handle = "";

  constructor() { }

  ngOnInit(): void {
  }

}
