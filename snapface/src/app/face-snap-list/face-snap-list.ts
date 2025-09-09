import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss'
})
export class FaceSnapList implements OnInit {

  faceSnaps!:FaceSnap[];

  constructor(private faceSnapsService:FaceSnapsService){
}
  
 ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }
}
