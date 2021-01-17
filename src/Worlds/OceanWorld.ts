/// <reference path="./Game.ts" />

class OceanWorld extends Game {

  private background: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.background = Utility.loadNewImage("./assets/img/world/OceanBG.jpg");
    this.xPos = 0;
    this.yPos = -100;
  }

  //Draws the background 
  public drawBackground(){
    const ctx = this.canvas.getContext("2d");
    ctx.drawImage(this.background, this.xPos, this.yPos);
  }

  public randomScoringItems(): void {
    const random = GameItem.randomInteger(10, 10);
    if (random === 1) {
      this.scoringItems.push(new Shark(this.canvas));
    }
    if (random === 2) {
      this.scoringItems.push(new Fish(this.canvas));
    }
    if (random === 3) {
      this.scoringItems.push(new Pearl(this.canvas));
    }
    if (random === 4) {
      this.scoringItems.push(new Rock1(this.canvas));
    }
    if (random === 5 || random === 6) {
      this.scoringItems.push(new inGameCoin(this.canvas));
    } 
    if (random === 7) {
      this.scoringItems.push(new Coral1(this.canvas));
    }
    if (random === 8) {
      this.scoringItems.push(new Coral2(this.canvas));
    }
    if (random === 9) {
      this.scoringItems.push(new Rock2(this.canvas));
    }
    if (random === 10){
      this.scoringItems.push(new QuestionBox(this.canvas));
    }
  }
}
