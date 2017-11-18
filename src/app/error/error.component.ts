import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public error:string;

  constructor() { 
    this.error = "Página no encontrada 404"
  }

  ngOnInit() {
    console.log('Error')
  }

}
