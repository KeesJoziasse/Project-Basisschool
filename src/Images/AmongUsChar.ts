/// <reference path="Images.ts" />

class AmongUsChar extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "AmongUsLime";
    this.image = Utility.loadNewImage(
      "./assets/img/Characters/AmongUs/amongUsLime.png"
    );
  }
}
