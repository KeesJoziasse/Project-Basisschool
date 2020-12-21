/// <reference path="../Button.ts" />

class PreviousCharacter extends Button {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "PreviousCharacter"
      this.image = Start.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }