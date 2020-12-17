/// <reference path="Button.ts" />

class ShowStartScreen extends Button {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "StartScreen";
    this.image = Start.loadNewImage("./assets/img/buttons/start-button.png");
  }

  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
}
