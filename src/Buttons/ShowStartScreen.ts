/// <reference path="Button.ts" />

class ShowStartScreen extends Button {
  public constructor(xPos: number, yPos: number, canvas: HTMLCanvasElement) {
    super(xPos, yPos, canvas);
    this.name = "StartScreen";
    this.image = Start.loadNewImage("./assets/img/buttons/start-button.png");
  }
}
