/// <reference path="../Game.ts" />

class ArticWorld extends Game{
    constructor(canvas:HTMLCanvasElement, worldName:string, characterName:string){
        super(canvas, worldName, characterName);
        this.image = GameItem.loadNewImage("./assets/img/world/ArticBG.jpg");
        this.speed = -3;
    }
}
