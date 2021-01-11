/// <reference path = "../Button.ts"/>

class UnlockYoshi extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockYoshi";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}