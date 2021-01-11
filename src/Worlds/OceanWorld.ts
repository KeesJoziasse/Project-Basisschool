/// <reference path="../Game.ts" />

class OceanWorld extends Game {
  private beginBackground: number;
  private animationFrameBackground: number;

  constructor(canvas: HTMLCanvasElement, worldName: string, characterName:string) {
    super(canvas, worldName, characterName);
    this.image = GameItem.loadNewImage("./assets/img/world/OceanBG.jpg");
    this.speed = -3;
    this.xPos = 0;
    this.yPos = -100;
    this.beginBackground = 1900;
    this.animationFrameBackground = 0;
  }

  //Draws the background and animates it so it looks like it moves
  public drawBackgroundOcean(){
    const ctx = this.canvas.getContext("2d");
    
    this.animationFrameBackground++;
    console.log(this.animationFrameBackground);

    //does a reset
    if(this.animationFrameBackground === 1200){
      this.animationFrameBackground = -1;
      this.xPos = 0;
      this.beginBackground = 1900;
    }

    //First loaded image
    if(this.animationFrameBackground < 900){
      ctx.drawImage(
        GameItem.loadNewImage("./assets/img/world/OceanBG.jpg"),
        this.xPos,
        this.yPos
      );
      this.xPos += this.speed;
    }

    //Second image that will be going behind the first
    if(this.animationFrameBackground > 200){
      ctx.drawImage(
        GameItem.loadNewImage("./assets/img/world/OceanBG.jpg"),
        this.beginBackground,
        this.yPos
      );
      this.beginBackground += this.speed;
    }
    
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

