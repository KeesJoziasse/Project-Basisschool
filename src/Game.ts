/**
 * Class Game: Responsible for the gameloop and will activate the class: GameItem, Player, ScoringItem
 */
abstract class Game {
  //The canvas
  protected canvas: HTMLCanvasElement;

  //The ingame player
  private player: Player[];
  // #TODO screen: Screen[]

  //The score of the player
  protected score: number;
  protected lives: number;
  protected earnedCoins: number;
  //Worldname of the current world
  // private worldName: string;

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

  /**
   * Constructor
   * @param canvasId HTML canvas where the game will be displayed on
   */
  public constructor(canvasId: HTMLCanvasElement, worldName: string) {
    this.canvas = canvasId;

    //Making the canvas width + canvas height
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //Making the player
    //#TODO fix that the new player made is chosen by startscreen
    this.player = [];

    //Setting the score to 0.
    this.score = 0;
    this.lives = 3;
    this.earnedCoins = 0;
    //Setting the framecounter to 0.
    this.frame = 0;

    //Authorizing the worldname.
    // this.worldName = worldName;

    //Speed of the world on canvas
    this.speed;

    //Calling the loop
    this.loop();

    //Scoringitems array
    this.scoringItems = [];

    //Endstate
    this.gameState = "Running";

    this.player.push(new AmongUs(this.canvas, "AmongUs"));
  }

  //Creates the scoring items for the ocean world
  public scoringItemsOceanWorld(): void {}

  //Frameindex for the worlds.
  public frameIndex() {}

  /**
   * Method that checks the gamestate
   */
  public loop = () => {
    console.log(this.gameState);
    this.frame++;
    this.draw();
    if (this.gameState === "Running") {
      this.forScoringItems();
      this.frameIndex();
    }
    //makes the player move, ifstatement makes sure the buttons are not spammable
    if (this.frame % 10 === 0) {
      this.player.forEach((player) => {
        player.move();
      });
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

      this.player.forEach((player) => {
        for (let i = 0; i < this.scoringItems.length; i++) {
          if (player.collidesWithScoringItem(this.scoringItems[i])) {
            //#TODO fix first if statement
            this.score += this.scoringItems[i].getPoints();
            this.lives += this.scoringItems[i].getLives();
            this.earnedCoins += this.scoringItems[i].getCoinValue();
            this.scoringItems.splice(i, 1);
          } else if (this.scoringItems[i].outOfCanvas()) {
            this.scoringItems.splice(i, 1);
          }
        }
      });
    }
  }

  //This function will be overwritten by Artic,Desert,Ocean,SwampWorlds
  public drawBackgroundDesert() {}
  public drawBackgroundOcean() {}
  

  /**
   * Method that writes gameItems on the canvas
   */
  public draw() {
    const ctx = this.canvas.getContext("2d");
    //clears the canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.drawBackgroundDesert();
    this.drawBackgroundOcean();

    //#TODO #FIX THIS IS A FUNCTION OF THE WORLD
    //Sets the background
    // if (this.worldName === "Ocean") {
    //   this.drawBackgroundOcean();
    // }

    // if (this.worldName === "Desert") {
    //   ctx.drawImage(
    //     GameItem.loadNewImage("./assets/img/world/DesertBG.jpg"),
    //     0,
    //     0
    //   );
    // }

    // if (this.worldName === "Artic") {
    //   ctx.drawImage(
    //     GameItem.loadNewImage("./assets/img/world/ArticBG.jpg"),
    //     0,
    //     0
    //   );
    // }

    // if (this.worldName === "Swamp") {
    //   ctx.drawImage(
    //     GameItem.loadNewImage("./assets/img/world/SwampBG.jpg"),
    //     0,
    //     -100
    //   );
    // }
    //Drawing the player
    this.player.forEach((player) => {
      player.draw(ctx);
    });

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
    Start.writeTextToCanvas(
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
      GameItem.loadNewImage("assets/img/GameItems/coin.png"),
      this.canvas.width / 20,
      this.canvas.height / 8
    );
    Start.writeTextToCanvas(
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
        GameItem.loadNewImage("/assets/img/GameItems/HealthBar/FullHP.png"),
        (this.canvas.width / 8) * 7,
        this.canvas.height / 8
      );
    }
    if (this.lives == 2) {
      ctx.drawImage(
        GameItem.loadNewImage("/assets/img/GameItems/HealthBar/2Lives.png"),
        (this.canvas.width / 8) * 7,
        this.canvas.height / 8
      );
    }
    if (this.lives == 1) {
      ctx.drawImage(
        GameItem.loadNewImage("/assets/img/GameItems/HealthBar/1Live.png"),
        (this.canvas.width / 8) * 7,
        this.canvas.height / 8
      );
    }
    if (this.lives == 0) {
      ctx.drawImage(
        GameItem.loadNewImage("/assets/img/GameItems/HealthBar/0Lives.png"),
        (this.canvas.width / 8) * 7,
        this.canvas.height / 8
      );
    }
    if (this.lives < 0) {
      ctx.drawImage(
        GameItem.loadNewImage("/assets/img/GameItems/HealthBar/Dead.png"),
        (this.canvas.width / 8) * 7,
        this.canvas.height / 8
      );
    }
  }

  private gameOver() {
    new Endscreen(this.canvas, this.score);
  }
}
