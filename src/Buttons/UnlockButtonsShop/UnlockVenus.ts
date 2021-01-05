/// <reference path = "../Button.ts"/>

class UnlockVenus extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockVenus";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}