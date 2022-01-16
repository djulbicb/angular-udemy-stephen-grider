import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app04_typing';

  textToWrite = lorem.sentence();
  textUser = "";
  isCorrect = false;

  onInput = (value:string) => {
    console.log(value);
    this.textUser = value;

    if (this.textToWrite == value) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }
  getClass = (templateLetter:string, userLetter:string) => {
    if (!userLetter) {
      return "pending";
    }

    if (userLetter === templateLetter) {
      return "correct"
    }

    return "incorrect";
  }
}
