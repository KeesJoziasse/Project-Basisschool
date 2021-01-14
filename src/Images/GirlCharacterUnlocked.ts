/// <reference path="Images.ts" />

class GirlCharacterUnlocked extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "GirlCharacterUnlocked";
    this.image = Utility.loadNewImage("./assets/img/players/girl.png");
  }
}
