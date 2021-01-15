/// <reference path="Images.ts" />

class GirlCharacter extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "GirlCharacter";
    this.image = Utility.loadNewImage("./assets/img/players/WazigGirl.png");
  }
}
