/// <reference path="../Button.ts" />

class PreviousCharacter extends Button {
    public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement) {
      super(xPos, yPos, canvas);
      this.name = "PreviousCharacter"
      this.image = Start.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }