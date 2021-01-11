/// <reference path="Button.ts" />

class YesButton extends Button {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "BackToStart";
      this.image = Start.loadNewImage("./assets/img/buttons/yesButton.png");
    }
  }