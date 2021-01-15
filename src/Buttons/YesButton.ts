/// <reference path="Button.ts" />

class YesButton extends Button {
  public constructor(xPos: number, yPos: number, canvas: HTMLCanvasElement) {
    super(xPos, yPos, canvas);
    this.name = "YesButton";
    this.image = Start.loadNewImage("./assets/img/buttons/yesButton.png");
  }
}
