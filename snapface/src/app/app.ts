import { Component, OnInit } from '@angular/core';
import { FaceSnapList } from "./face-snap-list/face-snap-list";

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapList
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {

}
