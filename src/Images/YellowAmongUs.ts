/// <reference path = "Images.ts"/>

class YellowAmongUsUnlockable extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "YellowAmongUs";
    //Unclear Image
    this.image = Utility.loadNewImage("./assets/img/players/yellowAU.png");
  }
}
