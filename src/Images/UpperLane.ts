/// <reference path="Images.ts" />

class UpperLane extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "upperLane";
    this.image = Utility.loadNewImage(
      "./assets/img/GeneralQuestions/upperLane.png"
    );
  }
}
