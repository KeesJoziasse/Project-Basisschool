/// <reference path="../Game.ts" />

class DesertWorld extends Game{
    
    private background:HTMLImageElement;

    constructor(canvas:HTMLCanvasElement, worldName:string, characterName:string){
        super(canvas, worldName, characterName);
        this.background = GameItem.loadNewImage("./assets/img/world/DesertBG.jpg");
    }
}
