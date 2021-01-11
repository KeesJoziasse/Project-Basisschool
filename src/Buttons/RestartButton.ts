/// <reference path = "Button.ts"/>

class RestartButton extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "RestartButton";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/RestartButton.png"
          );
    }
}