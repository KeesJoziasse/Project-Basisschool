/// <reference path="Images.ts" />

class Question1 extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "yes";
    this.image = Start.loadNewImage("./assets/img/world/ocean.png");
  }
}