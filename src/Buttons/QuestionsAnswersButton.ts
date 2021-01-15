/// <reference path="Button.ts" />

class QuestionsAnswersButton extends Button {
  public constructor(xPos: number, yPos: number, canvas: HTMLCanvasElement) {
    super(xPos, yPos, canvas);
    this.name = "QandA";
    this.image = Utility.loadNewImage("./assets/img/buttons/info-button.png");
  }
}
