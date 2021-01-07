/// <reference path = "Images.ts"/>

class YoshiUnlocked extends Images {

    public constructor(xPos: number, yPos: number) {
        super(xPos, yPos);
        this.name = "YoshiUnlocked";
        this.image = Start.loadNewImage(
          "./assets/img/players/YoshiUnlocked.png"
        );
        
      }

}