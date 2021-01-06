/// <reference path="Images.ts" />

class ArrowDown extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "arrowDown";
      this.image = Start.loadNewImage(
        "./assets/img/GeneralQuestions/arrowDown.png"
      );
    }
  }