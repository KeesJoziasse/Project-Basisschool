/// <reference path="Images.ts" />

class RocketBooster extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "rocketBooster";
      this.image = Start.loadNewImage(
        "./assets/img/GeneralQuestions/rocketBooster.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }