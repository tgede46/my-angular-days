import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template:`
 <h1>{{title}}</h1>
<p>age : {{age +10 }}</p>
<input type="text  "/>

val : {{counter}}
<button (click)="incre() ">Incrementation</button>
<button (click)="decre()">decrementation</button>
<button (click)="init()">initalse</button>
  `,
 
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'employe';
  age = 20;
  counter = 0;

  incre() {
    this.counter++;
  }

  decre() {
    this.counter--;
  }

  init() {
    this.counter = 0;
  }
}
