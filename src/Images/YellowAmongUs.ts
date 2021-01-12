/// <reference path = "Images.ts"/>

class YellowAmongUs extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "YellowAmongUs";
    //Unclear Image
    this.image = Start.loadNewImage("./assets/img/players/yellowAU.png");
  }
}
