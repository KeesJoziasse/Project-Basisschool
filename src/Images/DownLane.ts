/// <reference path="Images.ts" />

class DownLane extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "downLane";
    this.image = Utility.loadNewImage(
      "./assets/img/GeneralQuestions/downLane.png"
    );
  }
}
