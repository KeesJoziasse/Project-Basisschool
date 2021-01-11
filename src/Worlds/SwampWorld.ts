/// <reference path="../Game.ts" />

class SwampWorld extends Game{
    constructor(canvas:HTMLCanvasElement, worldName:string, characterName:string){
        super(canvas, worldName, characterName);
        this.image = GameItem.loadNewImage("./assets/img/world/SwampBG.jpg");
        this.speed = -3;
    }
}
