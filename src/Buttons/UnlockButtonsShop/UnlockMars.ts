/// <reference path = "../Button.ts"/>

class UnlockMars extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockMars";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}