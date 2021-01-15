/// <reference path="Images.ts" />

class OceanImage extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Ocean";
    this.image = Utility.loadNewImage("./assets/img/world/ocean.png");
  }
}
