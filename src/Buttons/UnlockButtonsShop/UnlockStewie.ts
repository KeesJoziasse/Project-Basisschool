/// <reference path = "../Button.ts"/>

class UnlockStewie extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockStewie";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}