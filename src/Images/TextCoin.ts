/// <reference path="Images.ts" />

class TextCoin extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "textCoin";
    this.image = Utility.loadNewImage(
      "./assets/img/GeneralQuestions/textCoin.png"
    );
  }
}
