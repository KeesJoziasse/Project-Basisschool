/// <reference path="Button.ts" />

class HighscoreButton extends Button {
  // image (zodat deze button zelf verantwoordelijk is voor zijn eigen image).
  // private image: HTMLImageElement

  public constructor(name: string, xPos: number, yPos: number, image: string) {
    super(name, xPos, yPos, image);
    // #TODO loadNewImage verplaatsen naar Screen
    // #TODO source path afmaken + images toevoegen in aparte map in img
    //this.image = Start.loadNewImage("./assets/img/buttons/");
  }

  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
}
