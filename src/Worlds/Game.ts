/**
 * Class Game: Responsible for the gameloop and will activate the class: GameItem, Player, ScoringItem
 */
 class Game {
  //The canvas
  protected canvas: HTMLCanvasElement;

  //The ingame player
  private player: Player;
  // #TODO screen: Screen[]

  //The score of the player
  protected score: number;
  protected lives: number;
  protected earnedCoins: number;

  //Amount of frames that have passed
  protected frame: number;

  //RNG
  protected random: number;

  //Scoring items array
  protected scoringItems: ScoringItem[];

  //speed of the worldImage
  protected speed: number;

  //xpos of the worldImage
  protected xPos: number;

  //xpos of the worldImage
  protected yPos: number;

  //image of the world
  protected image: HTMLImageElement;

  //GameOverState
  private gameState: string;

//test
 private ingameQuestion: InGameQuestions;

  /**
   * Constructor
   * @param canvasId HTML canvas where the game will be displayed on
   */
  public constructor(canvasId: HTMLCanvasElement) {
    this.canvas = canvasId;

    //Making the canvas width + canvas height
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //Setting the score to 0.
    this.score = 0;
    this.lives = 3;
    this.earnedCoins = 0;

    //Setting the framecounter to 0.
    this.frame = 0;

    //Speed of the world on canvas
    this.speed;

    //Calling the loop
    //TODO fix that no loop needed
    this.loop();

    //Scoringitems array
    this.scoringItems = [];

    //Endstate
    this.gameState = "Running";

    this.player = new Girl(this.canvas);
  }
// getters and setters

public getGameState(): string {
  return this.gameState;
}

public setGameState(gameState: string){
  this.gameState = gameState;
}
  

  //Creates the scoring items for the ocean world
  public randomScoringItems(): void {}


  // test
  //Creates the scoring items for the ocean world
  public mathRandom(): void {}

  //Frameindex for the worlds.
  public frameIndex() {
if(this.frame % 10 === 0){
  this.score++
}if(this.frame % 100 === 0){
  this.randomScoringItems();
}
  }

  /**
   * Method that checks the gamestate
   */
  public loop = 
  () => {
    console.log(this.gameState);

    // if(this.gameState === "question"){
    //   this.gameState === "Test";
    //   // new InGameQuestions (document.getElementById("canvas") as HTMLCanvasElement);
    // }

    if(this.gameState === "question"){
      console.log(this.gameState);
    }


    // console.log(this.gameState);
    if (this.gameState === "Running") {
      this.frame++;
      this.draw();
      this.forScoringItems();
      this.frameIndex();
      //Refacture to method #TODO JUSTIN
      if (this.frame % 10 === 0) {
        this.player.move();
      }
      
    }

    if (this.lives < 0) {
      this.gameState = "GameOver";
      this.gameOver();
    }

    requestAnimationFrame(this.loop);
  };

  //Handles everything for the scoringitems.
  private forScoringItems() {
    if (this.frame > 1) {
      this.scoringItems.forEach((scoringItem) => {
        scoringItem.move();
      });

      for (let i = 0; i < this.scoringItems.length; i++) {
        if (
          this.player.collidesWithScoringItem(this.scoringItems[i]) &&
          this.scoringItems[i].getName() === "QuestionBox"
        ) {
          new InGameQuestions (document.getElementById("canvas") as HTMLCanvasElement);
          this.gameState = "question";
          // this.ingameQuestion.draw();
          // console.log(this.score);
        }
        if (this.player.collidesWithScoringItem(this.scoringItems[i])) {
          //#TODO fix first if statement
          this.score += this.scoringItems[i].getPoints();
          this.lives += this.scoringItems[i].getLives();
          console.log(this.scoringItems[i].getName());
          this.earnedCoins += this.scoringItems[i].getCoinValue();
          this.scoringItems.splice(i, 1);
        } else if (this.scoringItems[i].outOfCanvas()) {
          this.scoringItems.splice(i, 1);
        }
      }
    }
  }

           
  //This function will be overwritten by DesertWorld
  public drawBackground() {
    const ctx = this.canvas.getContext("2d");
    if (this.gameState === "Running"){
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      Utility.loadNewImage("./assets/img/world/OceanBG.jpg")
    }
  }

  /**
   * Method that writes gameItems on the canvas
   */
  public draw() {
    const ctx = this.canvas.getContext("2d");
    //clears the canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawBackground();

    //Drawing the player
    this.player.draw(ctx);

    //Draws all the scoring items.
    if (this.frame > 1) {
      this.scoringItems.forEach((scoringItem) => scoringItem.draw(ctx));
    }
    this.drawScore(ctx);
    this.drawLives(ctx);
    
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

  public test(){
    this.frame++;
    this.draw();
    this.forScoringItems();
    this.frameIndex();
    //Refacture to method #TODO JUSTIN
    if (this.frame % 10 === 0) {
      this.player.move();
  }
  }
  private gameOver() {
    new Endscreen(this.canvas, this.score);
  }
}