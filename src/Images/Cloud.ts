/// <reference path="Images.ts" />

class Cloud extends Images {
  public constructor(xPos: number, yPos: number, xVelocity: number) {
    super(xPos, yPos);
    this.image = Utility.loadNewImage("./assets/img/background/cloud.png");
    this.xVelocity = xVelocity;
  }

  //Moves the cloud
  public move(canvas: HTMLCanvasElement) {
    this.xPos += this.xVelocity;
  }

  public reloadImage(canvas: HTMLCanvasElement) {
    if (
      (this.xPos + this.getImageImageWidth() < canvas.width + 0.75 &&
        this.xPos + this.getImageImageWidth() > canvas.width - 0.75) ||
      this.xPos < 0
    ) {
      this.xVelocity = -this.xVelocity;
    }
  }
}
