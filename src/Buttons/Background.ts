/// <reference path="Button.ts" />

class Background extends Button {
  // image (zodat deze button zelf verantwoordelijk is voor zijn eigen image).

  public constructor(xPos: number, yPos: number, xVelocity: number) {
    super(xPos, yPos);
    this.name = "HighScore";
    this.image = Start.loadNewImage("./assets/img/background/cloud.png");
    this.xVelocity = xVelocity;
    // #TODO loadNewImage verplaatsen naar Screen
    // #TODO source path afmaken + images toevoegen in aparte map in img
  }

  //Moves the cloud
  public move(canvas: HTMLCanvasElement) {
    this.xPos += this.xVelocity;
  }

  public reloadImage(canvas: HTMLCanvasElement) {
    //#TODO FIX
    if (
      (this.xPos + this.getButtonImageWidth() < canvas.width + 0.75 &&
        this.xPos + this.getButtonImageWidth() > canvas.width - 0.75) ||
      this.xPos < 0
    ) {
      this.xVelocity = -this.xVelocity;
    }
  }
  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
}
