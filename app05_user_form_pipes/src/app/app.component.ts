import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app05_user_form_pipes';

  uName = "";
  uDate:string = "";
  uCurrency:string = "";
  uConvert:string = "";

  setName = (value:string) => {
    this.uName = value;
  }

  setDate = (value: string) => {
    this.uDate = value;
  }

  setCurrency = (value: string) => {
    this.uCurrency = value;
  }

  setConvert = (value: string) => {
    this.uConvert = value;
  }
}

