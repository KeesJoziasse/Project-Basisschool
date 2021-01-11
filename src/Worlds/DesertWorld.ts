/// <reference path="../Game.ts" />

class DesertWorld extends Game{
    
    private background:HTMLImageElement;

    constructor(canvas:HTMLCanvasElement, worldName:string){
        super(canvas, worldName);
        this.background = GameItem.loadNewImage("./assets/img/world/DesertBG.jpg");
    }
}
