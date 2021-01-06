/// <reference path="../Game.ts" />

class OceanWorld extends Game {

  private image:HTMLImageElement;

  constructor(canvas: HTMLCanvasElement, worldName: string) {
    super(canvas, worldName);
    this.image = GameItem.loadNewImage("./assets/img/world/OceanBG.jpg");
  }

  // public drawBackground(ctx:CanvasRenderingContext2D){
  //   ctx.drawImage(this.image,
  //   this.canvas.width / 2,
  //   this.canvas.height / 2,
  //   )
  // }

  public frameIndex() {
    if (this.frame % 40 === 0) {
      this.scoringItemsOceanWorld();
    }
    if (this.frame % 10 === 0){
      this.score += 1
    }
  }

  public scoringItemsOceanWorld(): void {
    const random = GameItem.randomInteger(1, 4);
    if (random === 1) {
      this.scoringItems.push(new Shark(this.canvas));
    }
    if (random === 2) {
      this.scoringItems.push(new Fish(this.canvas));
    }
    if (random === 3) {
      this.scoringItems.push(new Pearl(this.canvas));
    }
    if(random === 4){
      this.scoringItems.push(new Rock(this.canvas));
    }
  }
}
