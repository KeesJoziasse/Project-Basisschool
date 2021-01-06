/// <reference path="Images.ts" />

class ArrowUp extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "arrowUP";
      this.image = Start.loadNewImage(
        "./assets/img/GeneralQuestions/arrowUp.png"
      );
    }
  }