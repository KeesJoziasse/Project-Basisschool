/// <reference path = "ScoringItem.ts"/> 

class Player extends ScoringItem {

    public constructor(canvas: HTMLCanvasElement){
        super();

        this.canvas = canvas;

        this.image = this.loadNewImage("./assets/img/amongus.png")
    }

}