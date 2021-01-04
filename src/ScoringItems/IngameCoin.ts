/// <reference path = "ScoringItem.ts"/>

class IngameCoin extends ScoringItem {

    public constructor(canvas:HTMLCanvasElement){
        super(canvas);
        this.name = "Coin";
        this.image = GameItem.loadNewImage("")
        this.speed = 15;
        this.points = 1;
    }
}