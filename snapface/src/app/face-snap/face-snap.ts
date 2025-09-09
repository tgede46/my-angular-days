import { Component, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {  TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    TitleCasePipe,
],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!:FaceSnap;

  snapButtonText!: string;
  userHasSnapped!:boolean;

  constructor(private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
  }

}
