import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnap implements OnInit{
  title!: string;
  description!:string;
  createdAt!:Date;
  snaps!:number;
  imagesUrl!:string;
  snapButtonText!: string;
  userHasSnapped!:boolean;

ngOnInit(): void {
    this.title='Archibald';
    this.description='Mon meilleur ami depuis tjrs';
    this.createdAt=new Date();
    this.snaps=0;
    this.snapButtonText='Oh Snap!';
    this.imagesUrl='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
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
 this.snaps--;
    this.snapButtonText='Oh Snap!'
    this.userHasSnapped=false;
}

snap(){
this.snaps++;
    this.snapButtonText='Oop on Snap'
    this.userHasSnapped=true;
}
}
