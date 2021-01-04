/// <reference path="Button.ts" />

class Unlock extends Button {

    public constructor(xPos: number, yPos: number, index: number) {
      super(xPos, yPos);
      this.name = "Unlock";
      this.image = Start.loadNewImage("./assets/img/buttons/unlock.png");
  
    }
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  
  }
  