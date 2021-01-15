/// <reference path = "Button.ts"/>

class RestartButton extends Button {
  public constructor(xPos: number, yPos: number, canvas: HTMLCanvasElement) {
    super(xPos, yPos, canvas);
    this.name = "RestartButton";
    this.image = Utility.loadNewImage("./assets/img/buttons/RestartButton.png");
  }
}
