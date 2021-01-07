/// <reference path="../Game.ts" />

class ArticWorld extends Game{
    constructor(canvas:HTMLCanvasElement, worldName:string){
        super(canvas, worldName);
        this.image = GameItem.loadNewImage("./assets/img/world/ArticBG.jpg");
        this.speed = -3;
    }
}
