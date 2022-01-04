import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app02_password_generator';

  length:number = 0;
  useLetters:boolean = false;
  useNumbers:boolean = false;
  useSpecialChars:boolean = false;
  generated:string = "";

  generate = () => {
    const letters = "qwertyuiopasdfghjkzxcvbnm";
    const numbers = "0123456789";
    const specialChars = "#$%^&*)(-=";
    let validCharacters = "";
    if (this.useLetters) {
      validCharacters += letters;
    }
    if (this.useNumbers) {
      validCharacters += numbers;
    }
    if (this.useSpecialChars) {
      validCharacters += specialChars;
    }

    let generate = "";
    for (let i=0; i < this.length; i++) {
      const index = this.getRandomInt(validCharacters.length);
      console.log(index);
      generate += validCharacters.charAt(index);
      console.log(index, generate);
    }
    this.generated = generate;
  }

  getRandomInt = (max:number) => {
    return Math.floor(Math.random() * max);
  }

  setUseLetters = (event:any) => {
    this.useLetters = event.target.checked;
  }
  setUseNumbers = (event:any) => {
    this.useNumbers = event.target.checked;
  }
  setUseSpecialChars = (event:any) => {
    this.useSpecialChars = event.target.checked;
  }
  getUseSpecialChars = () => {
    return this.useSpecialChars;
  }
  setLength = (event:any) => {
    console.log(">", event.target, this.length);
    const parsed = parseInt(event.target.value);
    if (isNaN(parsed)) {
      return;
    }
    this.length = parsed;
    console.log(">-",this.length);
  }
}
