/// <reference path="Images.ts" />

class DesertImage extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Desert";
    this.image = Start.loadNewImage("./assets/img/world/desert.png");
  }
}
