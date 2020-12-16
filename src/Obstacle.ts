/// <reference path = "ScoringItem.ts"/>

class Obstacle extends ScoringItem {

    public constructor(canvas: HTMLCanvasElement){
        super();

        this.canvas = canvas;

        this.image = this.loadNewImage("./assets/img/obstacle.png")

    }

}