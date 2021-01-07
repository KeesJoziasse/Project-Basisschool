/// <reference path = "../ScoringItem.ts"/>

class Fish extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanFish.png");
<<<<<<< Updated upstream
    this.points = 5;
    this.lives = 0;
  }
}
=======
    this.points = -5;
    this.speed = -3;
    }
}
>>>>>>> Stashed changes
