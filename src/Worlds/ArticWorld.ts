/// <reference path="./Game.ts" />

class ArticWorld extends Game {
  private background: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.background = Utility.loadNewImage("./assets/img/world/ArticBG.jpg");
    this.xPos = 0;
    this.yPos = -100;
  }

  //Draws the background
  public drawBackground() {
    const ctx = this.canvas.getContext("2d");
    ctx.drawImage(this.background, this.xPos, this.yPos);
  }

  public randomScoringItems(): void {
    const random = GameItem.randomInteger(1, 10);
    if (random === 1) {
      this.scoringItems.push(new IceBerg1(this.canvas));
    }
    if (random === 2) {
      this.scoringItems.push(new IceBerg2(this.canvas));
    }
    if (random === 3) {
      this.scoringItems.push(new IceBerg3(this.canvas));
    }
    if (random === 4) {
      this.scoringItems.push(new IcePool(this.canvas));
    }
    if (random === 5 || random === 6) {
      this.scoringItems.push(new inGameCoin(this.canvas));
    } if (random === 7){
      this.scoringItems.push(new QuestionBox(this.canvas));
    }
    if (random === 8) {
      this.scoringItems.push(new Penguin(this.canvas));
    }
    if (random === 9) {
      this.scoringItems.push(new SeaLion(this.canvas));
    }
  }
}
