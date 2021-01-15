/// <reference path="Images.ts" />

class Stickman extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Stickman";
    this.image = Utility.loadNewImage(
      "./assets/img/Characters/Stickman/stickman.png"
    );
  }
}
