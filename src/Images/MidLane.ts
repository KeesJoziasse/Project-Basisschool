/// <reference path="Images.ts" />

class MidLane extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "midLane";
    this.image = Utility.loadNewImage(
      "./assets/img/GeneralQuestions/midLane.png"
    );
  }
}
