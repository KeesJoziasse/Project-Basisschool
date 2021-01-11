/// <reference path="../Game.ts" />

class SwampWorld extends Game{
    constructor(canvas:HTMLCanvasElement, worldName:string){
        super(canvas, worldName);
        this.image = GameItem.loadNewImage("./assets/img/world/SwampBG.jpg");
        this.speed = -3;
    }
}
