/// <reference path="Button.ts" />

class NextSelector extends Button {

  public constructor(xPos: number, yPos: number, index: number) {
    super(xPos, yPos);
    this.name = "ArrowRight";
    this.image = Start.loadNewImage("./assets/img/buttons/arrow-right.png");

  }
  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)

}
