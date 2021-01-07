/// <reference path = "../ScoringItem.ts"/>

class Shark extends ScoringItem{
    public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanShark.png");
<<<<<<< Updated upstream
    this.points =-20;
    this.lives = -1;
=======
    this.points = -5;
    this.speed = -5;
>>>>>>> Stashed changes
    }
}