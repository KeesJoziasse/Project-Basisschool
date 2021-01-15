/// <reference path="Game.ts" />

class SwampWorld extends Game {
  private background: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.background = GameItem.loadNewImage("./assets/img/world/SwampBG.jpg");
    this.xPos = 0;
    this.yPos = -100;
  }

  //Draws the background
  public drawBackground() {
    const ctx = this.canvas.getContext("2d");

    ctx.drawImage(this.background, this.xPos, this.yPos);
  }
}
