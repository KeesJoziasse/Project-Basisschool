/// <reference path = "../ScoringItem.ts"/>

class Shark extends ScoringItem{
    public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = Utility.loadNewImage("assets/img/GameItems/ocean/oceanShark.png");
    this.points =-20;
    this.lives = -1;
    this.name = "Shark";
    this.earnedCoins = 0;
    }
}