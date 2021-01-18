/// <reference path="./Game.ts" />

class OceanWorld {
  //canvas
  private canvas: HTMLCanvasElement;

  //Image
  private background: HTMLImageElement;

  //Numbers
  private xPos: number;
  private yPos: number;
  private frame: number;
  private score: number;
  private earnedCoins: number;
  private lives: number;

  //Strings
  private characterName: string;

  //Array's
  private scoringItems: ScoringItem[];

  //Player
  private player: Player;

  constructor(canvas: HTMLCanvasElement, characterName: string) {
    this.canvas = canvas;

    this.background = Utility.loadNewImage("./assets/img/world/OceanBG.jpg");
    
    this.xPos = 0;
    this.yPos = -100;
    this.frame = 0;
    this.score = 0;
    this.earnedCoins = 0;
    this.lives = 3;

    this.scoringItems = [];

    this.characterName = characterName;
    if (this.characterName === "AmongUsLime") {
      this.player = new AmongUs(this.canvas);
    } else if (this.characterName === "Yoshi") {
      this.player = new Yoshi(this.canvas);
    } else if (this.characterName === "YellowAmongUs") {
      this.player = new YellowAmongUs(this.canvas);
    } else if (this.characterName === "Girl") {
      this.player = new Girl(this.canvas);
    } else if (this.characterName === "Sonic") {
      this.player = new Sonic(this.canvas);
    } else if (this.characterName === "") {
      this.player = new AmongUs(this.canvas);
    }
  }

  //Getters:
  public getLives(): number {
    return this.lives;
  }

  public getEarnedCoins(): number {
    return this.earnedCoins;
  }

  public getScore(): number {
    return this.score;
  }

  //Methods:

  public draw(){
    const ctx = this.canvas.getContext("2d");
    this.drawBackground();

    

    this.drawScore(ctx);
    this.drawLives(ctx);
  }

  /**
   * Draws The background of this world-
   */
  public drawBackground() {
    const ctx = this.canvas.getContext("2d");
    ctx.drawImage(this.background, this.xPos, this.yPos);
  }

  /**
   * Inceases the frame by 1
   */
  public increaseFrame() {
    //counter ++
    this.frame++;
  }

  /**
   * After 10 frames the score increases by 1, after 100 frames the randomScoringItmes is called
   */
  public scoringItemIndex() {
    if (this.frame % 10 === 0) {
      this.score++;
    }
    if (this.frame % 100 === 0) {
      this.randomScoringItems();
    }
  }

  /**
   * Moves the player + cooldown of 10 frames (to prevent spamming)
   */
  public movePlayer(){
    if (this.frame % 10 === 0) {
      this.player.move();
    }
  }

  /**
   * Pushing random scoring items
   */
  public randomScoringItems(): void {
    console.log(this.scoringItems)
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
    if (random === 10) {
      this.scoringItems.push(new QuestionBox(this.canvas));
    }
  }

  //Handles everything for the scoringitems.
  public forScoringItems() {
    //After 1 frame the scoringItems will start moving
    if (this.frame > 1) {
      this.scoringItems.forEach((scoringItem) => {
        scoringItem.move();
      });

      //scoringItmeCollision
      for (let i = 0; i < this.scoringItems.length; i++) {
        if (this.player.collidesWithScoringItem(this.scoringItems[i])) {
          this.score += this.scoringItems[i].getPoints();
          this.lives += this.scoringItems[i].getLives();
          //console.log(this.scoringItems[i].getName());
          this.earnedCoins += this.scoringItems[i].getCoinValue();
          this.scoringItems.splice(i, 1);
        } else if (this.scoringItems[i].outOfCanvas()) {
          this.scoringItems.splice(i, 1);
        }
      }
    }
  }

  /**
   * Draw the score on a canvas
   * @param ctx
   */
  private drawScore(ctx: CanvasRenderingContext2D): void {
    //Draws the score
    Utility.writeTextToCanvas(
      ctx,
      `Score: ${this.score}`,
      60,
      this.canvas.width / 2,
      this.canvas.height / 8,
      null,
      "red"
    );

    //Draws the earned coins
    ctx.drawImage(
      Utility.loadNewImage("assets/img/GameItems/coin.png"),
      this.canvas.width / 20,
      this.canvas.height / 8
    );

    Utility.writeTextToCanvas(
      ctx,
      `${this.earnedCoins}`,
      60,
      this.canvas.width / 8,
      this.canvas.height / 5,
      null,
      "red"
    );
  }

  /**
   * Draw the score on a canvas
   * @param ctx
   */
  private drawLives(ctx: CanvasRenderingContext2D): void {
    if (this.lives == 3) {
      ctx.drawImage(
        Utility.loadNewImage("/assets/img/GameItems/HealthBar/FullHP.png"),
        (this.canvas.width / 8) * 7,
        this.canvas.height / 8
      );
    }
    if (this.lives == 2) {
      ctx.drawImage(
        Utility.loadNewImage("/assets/img/GameItems/HealthBar/2Lives.png"),
        (this.canvas.width / 8) * 7,
        this.canvas.height / 8
      );
    }
    if (this.lives == 1) {
      ctx.drawImage(
        Utility.loadNewImage("/assets/img/GameItems/HealthBar/1Live.png"),
        (this.canvas.width / 8) * 7,
        this.canvas.height / 8
      );
    }
    if (this.lives == 0) {
      ctx.drawImage(
        Utility.loadNewImage("/assets/img/GameItems/HealthBar/0Lives.png"),
        (this.canvas.width / 8) * 7,
        this.canvas.height / 8
      );
    }
    if (this.lives < 0) {
      ctx.drawImage(
        Utility.loadNewImage("/assets/img/GameItems/HealthBar/Dead.png"),
        (this.canvas.width / 8) * 7,
        this.canvas.height / 8
      );
    }
  }
}
