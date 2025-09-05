export class FaceSnap{

    location?:string;


    constructor(public title:string,
        public description:string,
        public  imagesUrl: string,
        public createdAt:Date,
        public snaps:number,
    ){}

    addSnap():void{
        this.snaps++;
    }

    removeSnap(){
        this.snaps--;
    }

    setLocation(location:string):void{
        this.location=location;
    }
}