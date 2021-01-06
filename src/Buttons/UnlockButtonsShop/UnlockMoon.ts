/// <reference path = "../Button.ts"/>

class UnlockMoon extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockMoon";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}