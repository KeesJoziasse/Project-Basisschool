/// <reference path = "Images.ts"/>

class Sonic extends Images {

    public constructor(xPos: number, yPos: number) {
        super(xPos, yPos);
        this.name = "Sonic";
        this.image = Start.loadNewImage(
          "./assets/img/players/sonic.png"
        );
      }
}