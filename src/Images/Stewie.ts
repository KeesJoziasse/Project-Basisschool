/// <reference path = "Images.ts"/>

class Stewie extends Images {

    public constructor(xPos: number, yPos: number) {
        super(xPos, yPos);
        this.name = "Stewie";
        this.image = Start.loadNewImage(
          "./assets/img/players/stewie.png"
        );
        
      }

}