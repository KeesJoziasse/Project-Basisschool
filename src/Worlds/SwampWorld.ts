/// <reference path="../Game.ts" />

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

  //Pushes the scoring items to the array
  public randomScoringItems(): void {
    const random = GameItem.randomInteger(1, 9);
    if (random === 1) {
      this.scoringItems.push(new Frog(this.canvas));
    }
    if (random === 2) {
      this.scoringItems.push(new SwampStone1(this.canvas));
    }
    if (random === 3 || random === 8) {
      this.scoringItems.push(new SwampStone2(this.canvas));
    }
    if (random === 4) {
      this.scoringItems.push(new SwampTree1(this.canvas));
    }
    if (random === 5 || random === 6) {
      this.scoringItems.push(new inGameCoin(this.canvas));
    }
    if (random === 7) {
      this.scoringItems.push(new SwampTree2(this.canvas));
    }
    if (random === 9) {
      this.scoringItems.push(new GoldenFrog(this.canvas));
    }
  }
}
