import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassesDirective } from './classes.directive';
import { ForDirective } from './for.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassesDirective,
    ForDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
