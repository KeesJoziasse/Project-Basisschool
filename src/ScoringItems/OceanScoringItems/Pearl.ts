/// <reference path = "../ScoringItem.ts"/>

class Pearl extends ScoringItem{
    public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanParelBooster.png");
    this.points = -5;
    }
}