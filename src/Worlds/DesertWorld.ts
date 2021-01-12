/// <reference path="../Game.ts" />

class DesertWorld extends Game {
  private background: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement, worldName: string) {
    super(canvas, worldName);
    this.image = GameItem.loadNewImage("./assets/img/world/DesertBG.jpg");
  }

  public drawBackgroundDesert() {
    const ctx = this.canvas.getContext("2d");
    ctx.drawImage(
      GameItem.loadNewImage("./assets/img/world/DesertBG.jpg"),
      this.xPos,
      this.yPos
    );
  }
}
