/// <reference path="../Game.ts" />

class DesertWorld extends Game{
    
    private image:HTMLImageElement;

    constructor(canvas:HTMLCanvasElement, worldName:string, characterName:string){
        super(canvas, worldName, characterName);
        this.image = GameItem.loadNewImage("./assets/img/world/DesertBG.jpg");
    }
}
