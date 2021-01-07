/**
 * Class Game: Responsible for the gameloop and will activate the class: GameItem, Player, ScoringItem
 */
abstract class Game {
  //The canvas
  protected canvas: HTMLCanvasElement;
  //The ingame player
  private player: Player;
  // #TODO screen: Screen[]
  //The score of the player
  protected score: number;
  //Worldname of the current world
  private worldName: string;
  //Amount of frames that have passed
  protected frame: number;
  //RNG
  protected random: number;
  //Scoring items array
  protected scoringItems: ScoringItem[];
  //Number of lives.
  protected lives: number;

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
    this.player = new Player(this.canvas);
    //Setting the score to 0.
    this.score = 0;
    //Setting the framecounter to 0.
    this.frame = 0;
    //Setting the lives to 3
    this.lives = 3;
    //Authorizing the worldname.
    this.worldName = worldName;
    //Calling the loop
    this.loop();
    //Scoringitems array
    this.scoringItems = [];
  }

  //Creates the scoring items for the ocean world
  public scoringItemsOceanWorld(): void {}
  //Frameindex for the worlds.
  public frameIndex() {}

  //Draws the background
  public drawBackground(ctx: CanvasRenderingContext2D) {}

  /**
   * Method that checks the gamestate
   */
  public loop = () => {
    this.draw();
    this.gameOver();
    this.frame++;
    this.frameIndex();
    this.forScoringItems();

    //makes the player move, ifstatement makes sure the buttons are not spammable
    if (this.frame % 7 === 0) {
      this.player.move();
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
        if (this.player.collidesWithScoringItem(this.scoringItems[i])) {
          this.score += this.scoringItems[i].getPoints();
          this.lives += this.scoringItems[i].getLives();
          this.scoringItems.splice(i, 1);
        } else if (this.scoringItems[i].outOfCanvas()) {
          this.scoringItems.splice(i, 1);
        }
      }
    }
  }

  /**
   * Method that writes gameItems on the canvas
   */
  private draw() {
    const ctx = this.canvas.getContext("2d");
    //clears the canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawScore(ctx);
    this.drawLives(ctx);

    //#TODO #FIX THIS IS A FUNCTION OF THE WORLD
    //Sets the background
    if (this.worldName === "Ocean") {
      ctx.drawImage(
        GameItem.loadNewImage("./assets/img/world/OceanBG.jpg"),
        0,
        -100
      );
    }

    if (this.worldName === "Desert") {
      ctx.drawImage(
        GameItem.loadNewImage("./assets/img/world/DesertBG.jpg"),
        0,
        0
      );
    }

    if (this.worldName === "Artic") {
      ctx.drawImage(
        GameItem.loadNewImage("./assets/img/world/ArticBG.jpg"),
        0,
        0
      );
    }

    if (this.worldName === "Swamp") {
      ctx.drawImage(
        GameItem.loadNewImage("./assets/img/world/SwampBG.jpg"),
        0,
        -100
      );
    }


    //Drawing the player
    this.player.draw(ctx);
    //Draws all the scoring items.
    if (this.frame > 1) {
      this.scoringItems.forEach((scoringItem) => scoringItem.draw(ctx));
    }
  }

  //Gameover Checker
  private gameOver() {
    if (this.lives < 0) {
      alert(
        "Ohnee je bent af, refresh de pagina om opnieuw te kunnen spelen !"
      );
    }
  }

  /**
   * Draw the score on a canvas
   * @param ctx
   */
  private drawScore(ctx: CanvasRenderingContext2D): void {
    Start.writeTextToCanvas(
      ctx,
      `Score: ${this.score}`,
      60,
      this.canvas.width / 8,
      this.canvas.height / 8,
      null,
      "red"
    );
  }

  /**
   * Draw the score on a canvas
   * @param ctx
   */
  private drawLives(ctx: CanvasRenderingContext2D): void {
    Start.writeTextToCanvas(
      ctx,
      `Score: ${this.lives}`,
      60,
      (this.canvas.width / 8) * 7,
      this.canvas.height / 8,
      null,
      "red"
    );
  }
}
