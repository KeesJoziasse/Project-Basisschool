/// <reference path="Button.ts" />

class NoButton extends Button {
  public constructor(xPos: number, yPos: number, canvas: HTMLCanvasElement) {
    super(xPos, yPos, canvas);
    this.name = "NoButton";
    this.image = Utility.loadNewImage("./assets/img/buttons/noButton.png");
  }
}
