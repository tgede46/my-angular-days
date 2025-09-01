import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap';
import { FaceSnapComponent } from './face-snap/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  myLastSnap!:FaceSnap;
  
  ngOnInit():void{
    this.mySnap=new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tjrs',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    );
     this.myOtherSnap =new FaceSnap(
      'Three Rock Mountain',
      'un endroit magnifique pour la randonnes',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      6
     );
     this.myLastSnap =new FaceSnap(
      'Three autre',
      'un endroit magnifique pour la randonnes',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      6
     );
  }
}
