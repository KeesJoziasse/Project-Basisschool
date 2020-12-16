/// <reference path = "ScoringItem.ts"/>

class Coin extends ScoringItem {

    public constructor(canvas: HTMLCanvasElement){
        super();

        this.canvas = canvas;

        this.image = this.loadNewImage("./assets/img/coin.png")
    }

}