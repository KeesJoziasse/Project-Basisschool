/// <reference path="Button.ts" />

class QuestionsAnswersButton extends Button {
  // image (zodat deze button zelf verantwoordelijk is voor zijn eigen image).

  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "QandA";
    this.image = Start.loadNewImage("./assets/img/buttons/info-button.png");
    // #TODO loadNewImage verplaatsen naar Screen
    // #TODO source path afmaken + images toevoegen in aparte map in img
  }

  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
}