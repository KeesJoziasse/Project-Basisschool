/// <reference path="../Game.ts" />

class OceanWorld extends Game {
  constructor(canvas: HTMLCanvasElement, worldName: string) {
    super(canvas, worldName);
  }

  public frameIndex() {
    if (this.frame % 100 === 0) {
      this.scoringItemsOceanWorld();
    }
  }

  public scoringItemsOceanWorld(): void {
    const random = GameItem.randomInteger(1, 3);
    if (random === 1) {
      this.scoringItems.push(new Shark(this.canvas));
    }
    if (random === 2) {
      this.scoringItems.push(new Fish(this.canvas));
    }
    if (random === 3) {
      this.scoringItems.push(new Pearl(this.canvas));
    }
  }
}
