/// <reference path="../Button.ts" />

class NextWorld extends Button {

    public constructor(xPos: number, yPos: number, index: number, canvas:HTMLCanvasElement) {
      super(xPos, yPos, canvas);
      this.name = "NextWorld";
      this.image = Utility.loadNewImage("./assets/img/buttons/arrow-right.png");
  
    }
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  
  }