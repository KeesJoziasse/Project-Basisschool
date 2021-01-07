/// <reference path="../Game.ts" />

class DesertWorld extends Game{

    constructor(canvas:HTMLCanvasElement, worldName:string){
        super(canvas, worldName);
        this.image = GameItem.loadNewImage("./assets/img/world/DesertBG.jpg");
        this.speed = -3;
    }
}
