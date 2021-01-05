/// <reference path="Images.ts" />

class TextShieldBooster extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "textShieldBooster";
      this.image = Start.loadNewImage(
        "./assets/img/GeneralQuestions/textShieldBooster.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }