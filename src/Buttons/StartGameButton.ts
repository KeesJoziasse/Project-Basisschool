/// <reference path="Button.ts" />

class StartGameButton extends Button {
  public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement) {
    super(xPos, yPos, canvas);
    this.name = "StartGame";
    this.image = Start.loadNewImage("./assets/img/buttons/start-button.png");
  }

  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
}
