/// <reference path="Button.ts" />

class NoButton extends Button {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "NoButton";
      this.image = Start.loadNewImage("./assets/img/buttons/noButton.png");
    }
  }