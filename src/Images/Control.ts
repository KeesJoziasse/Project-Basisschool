/// <reference path="Images.ts" />

class Control extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "Control";
      this.image = Utility.loadNewImage(
        "./assets/img/GeneralQuestions/control.png"
      );
    }
  }