/// <reference path="Images.ts" />

class ShieldBooster extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "shieldBooster";
    this.image = Utility.loadNewImage(
      "./assets/img/GeneralQuestions/shieldBooster.png"
    );
  }
}
