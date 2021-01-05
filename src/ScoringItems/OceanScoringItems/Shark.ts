/// <reference path = "../ScoringItem.ts"/>

class Shark extends ScoringItem{
    public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanShark.png");
    this.points = -5;
    }
}