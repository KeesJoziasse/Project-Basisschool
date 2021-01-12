/// <reference path="../Game.ts" />

class ArticWorld extends Game {
  private background: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement, worldName: string) {
    super(canvas, worldName);
    this.background = GameItem.loadNewImage("./assets/img/world/ArticBG.jpg");
    this.xPos = 0;
    this.yPos = -100;
  }

  //Draws the background
  public drawBackgroundArtic() {
    const ctx = this.canvas.getContext("2d");

    ctx.drawImage(this.background, this.xPos, this.yPos);
  }
}
