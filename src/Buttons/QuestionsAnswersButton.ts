/// <reference path="Button.ts" />

class QuestionsAnswersButton extends Button {
  public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement) {
    super(xPos, yPos, canvas);
    this.name = "QandA";
    this.image = Start.loadNewImage("./assets/img/buttons/info-button.png");
  }
  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
}
