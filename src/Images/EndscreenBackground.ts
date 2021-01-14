/// <reference path="Images.ts" />

class EndscreenBackground extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "EndscreenBG";
    this.image = Utility.loadNewImage(
      "./assets/img/background/EndscreenBackground.jpg"
    );
  }
}
