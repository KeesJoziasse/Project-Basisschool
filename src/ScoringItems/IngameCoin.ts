/// <reference path = "ScoringItem.ts"/>

class IngameCoin extends ScoringItem {

    public constructor(canvas: HTMLCanvasElement){
        super(canvas);
        this.name = "Coin";
        this.image = GameItem.loadNewImage("./assets/img/coin.png")
        this.points = 1;
    }
}