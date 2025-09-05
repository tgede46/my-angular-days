import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!:FaceSnap;

  snapButtonText!: string;
  userHasSnapped!:boolean;

ngOnInit(): void {
    this.snapButtonText='Oh Snap!';
    this.userHasSnapped=false;
}

onSnap():void{
  if (this.userHasSnapped){
   this.unSnap();
  }else{
   this.snap(); 
  }
}
unSnap(){
    this.faceSnap.removeSnap();
    this.snapButtonText='Oh Snap!'
    this.userHasSnapped=false;
}

snap(){
this.faceSnap.addSnap();
    this.snapButtonText='Oop on Snap'
    this.userHasSnapped=true;
}
}
