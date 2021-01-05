/// <reference path = "../Button.ts"/>

class UnlockAmongUs extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockAmongUs";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}