import { Component } from '@angular/core';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public title = 'Productos angular 4';
   public headerColor : string;
   
   constructor(){
     this.headerColor = GLOBAL.header_color;
   }
}
