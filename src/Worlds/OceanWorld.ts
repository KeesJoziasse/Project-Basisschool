/// <reference path="./Game.ts" />

class OceanWorld {

  private background: HTMLImageElement;
  private canvas: HTMLCanvasElement;
  private characterName: string;
  private xPos: number;
  private yPos: number;
  private player: Player;
  private scoringItems: ScoringItem[];

  constructor(canvas: HTMLCanvasElement, characterName: string) {
    this.background = Utility.loadNewImage("./assets/img/world/OceanBG.jpg");
    this.xPos = 0;
    this.yPos = -100;
    this.canvas = canvas;


    this.characterName = characterName;
    if (this.characterName === "AmongUsLime"){
      this.player = new AmongUs(this.canvas);
    } else if (this.characterName === "Yoshi"){
      this.player = new Yoshi(this.canvas);
    } else if (this.characterName === "YellowAmongUs"){
      this.player = new YellowAmongUs(this.canvas);
    } else if (this.characterName === "Girl"){
      this.player = new Girl(this.canvas);
    } else if(this.characterName === "Sonic"){
      this.player = new Sonic(this.canvas);
    } else if(this.characterName === ""){
      this.player = new AmongUs(this.canvas);
    }
  }

  //Draws the background 
  public drawBackground(){
    const ctx = this.canvas.getContext("2d");
    ctx.drawImage(this.background, this.xPos, this.yPos);
  }

  /**
   * Pushing random scoring items
   */
  public randomScoringItems(): void {
    const random = GameItem.randomInteger(1, 10);
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
