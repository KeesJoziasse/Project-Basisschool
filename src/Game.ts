/**
 * Class Game: Responsible for the gameloop and will activate the class: GameItem, Player, ScoringItem
 */
abstract class Game {
  //The canvas
  protected canvas: HTMLCanvasElement;

  //The ingame player
  private player: Player;
  // #TODO screen: Screen[]
  //Array of game items ??
  private gameItems: GameItem[]; //Probs remove it.

  //The score of the player
  private score: number;

  //Worldname of the current world
  private worldName: string;

  //Amount of frames that have passed
  protected frame: number;

  //RNG
  protected random: number;

  //Scoring items array
  protected scoringItems: ScoringItem[];

  //testArea
  private test: Shark;

  /**
   * Constructor
   * @param canvasId HTML canvas where the game will be displayed on
   */
  public constructor(canvasId: HTMLCanvasElement, worldName: string) {
    this.canvas = canvasId;

    //Making the canvas width + canvas height
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //Array of the gameItems
    //this.gameItems = [];

    //Making the player
    this.player = new Player(this.canvas);

    //Setting the score to 0.
    this.score = 0;

    //Setting the framecounter to 0.
    this.frame = 0;

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

  /**
   * Method that checks the gamestate
   */
  public loop = () => {
    this.frame++;

    this.draw();

    this.frameIndex();

    this.forScoringItems();

    //makes the player move, ifstatement makes sure the buttons are not spammable
    if (this.frame % 10 === 0) {
      this.player.move();
    }

    requestAnimationFrame(this.loop);

    console.log(this.scoringItems);
  };

  //Handles everything for the scoringitems.
  private forScoringItems() {
    if (this.frame > 1) {
      this.scoringItems.forEach((scoringItem) => {
        scoringItem.move();
      });

      for (let i = 0; i < this.scoringItems.length; i++) {
        if (this.player.collidesWithScoringItem(this.scoringItems[i])) { //#TODO fix first if statement
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
  public draw() {
    const ctx = this.canvas.getContext("2d");

    //clears the canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //test text write Danger Dash
    Start.writeTextToCanvas(
      ctx,
      "Run!",
      60,
      this.canvas.width / 2,
      80,
      "center"
    );

    //Drawing the player
    this.player.draw(ctx);

    //Draws all the scoring items.
    if (this.frame > 1) {
      this.scoringItems.forEach((scoringItem) => scoringItem.draw(ctx));
    }
  }
}
