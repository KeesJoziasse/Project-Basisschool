/// <reference path="Images.ts" />

class SwampImage extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Swamp";
    this.image = Utility.loadNewImage("./assets/img/world/swamp.png");
  }
}
