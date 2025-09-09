import { Component, OnInit } from '@angular/core';
import { Header } from "./header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {

}
