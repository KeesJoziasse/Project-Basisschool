/// <reference path="../Button.ts" />

class HighscoreButton extends Button {
  public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement) {
    super(xPos, yPos, canvas);
    this.name = "HighScore";
    this.image = Utility.loadNewImage(
      "./assets/img/buttons/high-score-button.png"
    );
  }

  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
}

