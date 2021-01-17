/// <reference path="./Game.ts" />

class DesertWorld extends Game {
  private background: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement, characterName: string) {
    super(canvas, characterName);
    this.background = Utility.loadNewImage("./assets/img/world/DesertBG.jpg");
    this.xPos = 0;
    this.yPos = -100;
  }

  //Draws the background
  public drawBackground() {
    const ctx = this.canvas.getContext("2d");
    ctx.drawImage(this.background, this.xPos, this.yPos);
  }

  public randomScoringItems(): void {
    const random = GameItem.randomInteger(1, 11);
    if (random === 1) {
      this.scoringItems.push(new Bushes(this.canvas));
    }
    if (random === 2) {
      this.scoringItems.push(new Cactus1(this.canvas));
    }
    if (random === 3) {
      this.scoringItems.push(new Cactus2(this.canvas));
    }
    if (random === 4) {
      this.scoringItems.push(new DesertStone2(this.canvas));
    }
    if (random === 5 || random === 6) {
      this.scoringItems.push(new inGameCoin(this.canvas));
    }
    if (random === 7) {
      this.scoringItems.push(new QuestionBox(this.canvas));
    }
    if (random === 8) {
      this.scoringItems.push(new DesertStone1(this.canvas));
    }
    if (random === 9) {
      this.scoringItems.push(new Skull(this.canvas));
    }
    if (random === 10) {
      this.scoringItems.push(new DesertCoin(this.canvas));
    }
    if (random === 11) {
      this.scoringItems.push(new Urn(this.canvas));
    }
  }
}
