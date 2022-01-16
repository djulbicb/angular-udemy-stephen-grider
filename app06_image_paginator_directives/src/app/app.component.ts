import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app06_image_paginator_directives';
  currentIndex = 0;

  images = [
    {
      title : "Hill",
      url : "https://images.unsplash.com/photo-1641487379980-5258b619ecc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title : "Twister",
      url : "https://images.unsplash.com/photo-1641497439550-b817b0682350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title : "Mosaic",
      url : "https://images.unsplash.com/photo-1641489973978-acad95d19e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
    },
    {
      title : "Forest",
      url : "https://images.unsplash.com/photo-1641437123627-837979a33c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title : "Hill",
      url : "https://images.unsplash.com/photo-1641487379980-5258b619ecc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title : "Twister",
      url : "https://images.unsplash.com/photo-1641497439550-b817b0682350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title : "Mosaic",
      url : "https://images.unsplash.com/photo-1641489973978-acad95d19e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
    },
    {
      title : "Forest",
      url : "https://images.unsplash.com/photo-1641437123627-837979a33c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title : "Hill",
      url : "https://images.unsplash.com/photo-1641487379980-5258b619ecc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title : "Twister",
      url : "https://images.unsplash.com/photo-1641497439550-b817b0682350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title : "Mosaic",
      url : "https://images.unsplash.com/photo-1641489973978-acad95d19e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
    },
    {
      title : "Forest",
      url : "https://images.unsplash.com/photo-1641437123627-837979a33c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title : "Hill",
      url : "https://images.unsplash.com/photo-1641487379980-5258b619ecc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title : "Twister",
      url : "https://images.unsplash.com/photo-1641497439550-b817b0682350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title : "Mosaic",
      url : "https://images.unsplash.com/photo-1641489973978-acad95d19e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
    },
    {
      title : "Forest",
      url : "https://images.unsplash.com/photo-1641437123627-837979a33c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title : "Hill",
      url : "https://images.unsplash.com/photo-1641487379980-5258b619ecc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title : "Twister",
      url : "https://images.unsplash.com/photo-1641497439550-b817b0682350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title : "Mosaic",
      url : "https://images.unsplash.com/photo-1641489973978-acad95d19e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
    },
    {
      title : "Forest",
      url : "https://images.unsplash.com/photo-1641437123627-837979a33c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    }
  ]

}
