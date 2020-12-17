/// <reference path = "ScoringItem.ts"/>

class PowerUp extends ScoringItem{
    
    public constructor(canvas: HTMLCanvasElement){
        super();

        this.canvas = canvas;

        this.image = this.loadNewImage("./assets/img/powerup.png")
    }

}