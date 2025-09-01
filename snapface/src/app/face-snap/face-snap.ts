import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!:FaceSnap;

  title!: string;
  description!:string;
  createdAt!:Date;
  snaps!:number;
  imagesUrl!:string;
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
