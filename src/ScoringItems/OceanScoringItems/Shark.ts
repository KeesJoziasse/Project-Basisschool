/// <reference path = "../ScoringItem.ts"/>

class Shark extends ScoringItem{
    public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage("assets/img/obstacles/Ocean/oceanShark.png");
    this.points =-20;
    this.lives = -1;
    this.earnedCoins = 0;
    }
}