/// <reference path="Images.ts" />

class TextObstacle extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "textObstacle";
    this.image = Utility.loadNewImage(
      "./assets/img/GeneralQuestions/textObstacle.png"
    );
  }
}
