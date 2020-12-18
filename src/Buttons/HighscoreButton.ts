/// <reference path="Button.ts" />

class HighscoreButton extends Button {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "HighScore";
    this.image = Start.loadNewImage(
      "./assets/img/buttons/high-score-button.png"
    );
  }

  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
}

