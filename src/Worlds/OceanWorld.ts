/// <reference path="../Game.ts" />

class OceanWorld extends Game {

  private background: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement, worldName: string) {
    super(canvas, worldName);
    this.background = GameItem.loadNewImage("./assets/img/world/OceanBG.jpg");
    this.xPos = 0;
    this.yPos = -100;
  }

  //Draws the background 
  public drawBackgroundOcean(){
    const ctx = this.canvas.getContext("2d");

    ctx.drawImage(this.background, this.xPos, this.yPos);
  }

  public frameIndex() {
    if (this.frame % 100 === 0) {
      this.scoringItemsOceanWorld();
    }
    if (this.frame % 10 === 0){
      this.score += 1;
    }
  }

  public scoringItemsOceanWorld(): void {
    const random = GameItem.randomInteger(3, 6);
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
    if(random === 5){
      this.scoringItems.push(new inGameCoin(this.canvas));
    } if (random === 6){
      this.scoringItems.push(new QuestionBox(this.canvas));
    }
  }
}

