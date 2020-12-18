/// <reference path = "ScoringItem.ts"/>

class Coin extends ScoringItem {

    public constructor(xPosition: number, yPosition: number, canvas: HTMLCanvasElement){
        super(canvas);
        this.name = "Coin";
        this.image = GameItem.loadNewImage("./assets/img/coin.png")
        this.points = 1;
    }
}