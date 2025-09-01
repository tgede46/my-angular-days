export class FaceSnap{
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
}