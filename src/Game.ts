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
  private gameItems: GameItem[];

  //The score of the player
  private score: number;

  //Worldname of the current world
  private worldName: string;

  //Amount of frames that have passed
  private frame: number;

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
    this.gameItems = [];

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

    //RNG
    this.random = Start.randomNumber(1,1)//TODO make it so the max number is the length of the array or all the world have the same amount of objects.

    //Scoringitems array
    this.scoringItems = [new Shark(this.canvas)];

    //TEST AREA
    // if (this.frame > 10){
    // this.test.scoringItemsArticWorld();
    // }
    // this.test = new Shark(this.canvas);
  }

  //Creates the scoring items for the articworld
  public scoringItemsArticWorld() : void {
    if(this.random === 1){
        this.scoringItems.push(new Shark(this.canvas));
    }
}

  /**
   * Method that checks the gamestate
   */
  public loop = () => {
    this.frame++;
    
    this.draw();

    //makes the player move
    //ifstatement makes sure the buttons are not spammable
    if(this.frame % 10 === 0){
      this.player.move();
    }
    

    // #TODO hiervan aparte methode maken: checkGameState()
    if (this.worldName === "level-1") {
      console.log("level 1");
      // #TODO draw gameitems
      // #TODO add randomly gameItems to the game and draw them
      // #TODO make the gameItems move horizontal to the left
      // #TODO create a background
    } else if (this.worldName === "Level-2") {
    }

    if(this.worldName === "Desert"){
      new DesertWorld(this.canvas, "Desert");
    }

    requestAnimationFrame(this.loop);

    //TEST AREA
    //console.log(this.frame);
    // console.log(this.scoringItems);
    // console.log(this.random);
    console.log(this.test);
    
    if(this.frame > 10){
    this.scoringItems.forEach(scoringItem => scoringItem.move());
    }
  };

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

    //Test area
    if(this.frame > 10){
      this.scoringItems.forEach(scoringItem => scoringItem.draw(ctx));
    }
  }
}
