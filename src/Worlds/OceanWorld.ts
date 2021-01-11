/// <reference path="../Game.ts" />

class OceanWorld extends Game {

  private image: HTMLImageElement;
  private xPos: number;
  private yPos: number;
  private speed: number;
  private animationFrameBackground: number;

  constructor(canvas: HTMLCanvasElement, worldName: string, characterName:string) {
    super(canvas, worldName, characterName);
    this.image = GameItem.loadNewImage("./assets/img/world/OceanBG.jpg");
    this.xPos;
    this.yPos;
    this.speed = -3;
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
      }
  
      //First loaded image
      if(this.animationFrameBackground < 900){
        ctx.drawImage(
          this.image,
          this.xPos,
          this.yPos
        );
        this.xPos += this.speed;
      }
      
    }

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
