/// <reference path="Images.ts" />

class TextRocketBooster extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "textRocketBooster";
      this.image = Start.loadNewImage(
        "./assets/img/GeneralQuestions/textRocketBooster.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }