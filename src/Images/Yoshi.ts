/// <reference path = "Images.ts"/>

class Yoshi extends Images {

    public constructor(xPos: number, yPos: number) {
        super(xPos, yPos);
        this.name = "Yoshi";
        this.image = Start.loadNewImage(
          "./assets/img/players/yoshi.png"
        );
        
      }

}