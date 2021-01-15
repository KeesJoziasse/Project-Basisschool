/// <reference path="Images.ts" />

class ArticImage extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Artic";
    this.image = Utility.loadNewImage("./assets/img/world/artic.png");
  }
}
