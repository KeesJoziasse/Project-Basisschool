/// <reference path = "ScoringItem.ts"/>

class Coin extends ScoringItem {

    public constructor(canvas:HTMLCanvasElement){
        super(canvas);
        this.name = "Coin";
        this.image = GameItem.loadNewImage("")
        this.speed = 15;
        this.points = 1;
    }
}