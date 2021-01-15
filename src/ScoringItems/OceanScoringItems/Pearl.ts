/// <reference path = "../ScoringItem.ts"/>

class Pearl extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
<<<<<<< Updated upstream
    this.image = this.loadNewImage(
      "assets/img/GameItems/ocean/oceanParelBooster.png"
    );
    this.points = 20;
    this.lives = 0;
    this.name = "Pearl";
    this.earnedCoins = 0;
  }
}
=======
    this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanParelBooster.png");
    this.points = -5;
    this.speed = -3;
    }
}
>>>>>>> Stashed changes
