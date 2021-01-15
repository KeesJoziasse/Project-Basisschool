/// <reference path="Images.ts" />

class YellowAmongUsUnlocked extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "UnlockYellowAmongUs";
    this.image = Utility.loadNewImage(
      "./assets/img/players/yellowAUUnlocked.png"
    );
  }
}
