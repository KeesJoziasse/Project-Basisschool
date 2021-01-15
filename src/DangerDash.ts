class DangerDash {
  //#TODO make abstract class GameScreen or Screens
  private canvas: HTMLCanvasElement;
  private earnedCoins: number;
  private DangerDashFrame: number;
  private buttons: Button[];

  private start: Start;
  private shop: Shop;

  private screenName: string;

  public constructor(canvas: HTMLCanvasElement) {
    //canvas
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.earnedCoins = 0;
    this.screenName = "Start";

    this.start = new Start(canvas);

    this.DangerDashFrame = 0;

    this.buttons = [];

    //Calling the loop
    this.loop();
  }

  //Gets the screenName
  public getScreenName(): string {
    return this.screenName;
  }

  /**
   * Method that checks the gamestate
   */
  public loop = () => {
    this.DangerDashFrame++;
    //console.log(this.DangerDashFrame);

    if (this.screenName === "Start") {
      //Adds EventListener on buttons
      document.addEventListener("click", this.mouseHandlerStart);

      //Draws startScreen
      this.start.draw();

      if(this.DangerDashFrame === 1){
        //Pushing the startButtons
        this.buttonMaker();
        console.log(this.buttons);
      }
      
      //Draws all the buttons
      this.buttons.forEach((button) => {
        button.draw();
      });

      //remind gebruik deze bij de mousehandler zodra er een knop / screenname veranderd
      //this.deleteButtons();
    }

    //console.log(this.screenName);
    requestAnimationFrame(this.loop);
  };

  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandlerStart = (event: MouseEvent): void => {
    console.log(`xPos ${event.clientX}, yPos ${event.clientY}`); //Check what pos is clicked on the screen.
    console.log(this.buttons);
    this.buttons.forEach((button) => {
      console.log("ree");
      if (
        event.clientX >= button.getButtonXPos() &&
        event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
        event.clientY >= button.getButtonYPos() &&
        event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()
      ) {
        
        //button.logButtonName();
        if (button.getButtonName() === "StartGame") {
          console.log("ree new game");
          new Game(this.canvas);
        }
      } else {
        return null;
      }
    });
  };

  private buttonMaker() {
    //Initializing the buttons and pushing them to the array
    //Making the start button
    this.buttons.push(
      new StartGameButton(
        this.canvas.width / 2 - 329 / 2, //Fix this secton for centering no magic numbers #TODO
        (this.canvas.height / 5) * 4 - 100 / 2, //Fix this secton for centering no magic numbers #TODO
        this.canvas
      )
    );

    //Making the shop button
    this.buttons.push(
      new ShopButton(
        this.canvas.width / 5 - 329 / 2,
        (this.canvas.height / 6) * 4,
        this.canvas
      )
    );

    //Making the highscore button
    this.buttons.push(
      new HighscoreButton(
        (this.canvas.width / 5) * 4 - 329 / 2,
        (this.canvas.height / 6) * 4,
        this.canvas
      )
    );

    //Making the left arrow for character selector
    this.buttons.push(
      new PreviousCharacter(
        this.canvas.width / 4,
        this.canvas.height / 2 - 89,
        this.canvas
      )
    );

    //Making the right arrow for character selector
    this.buttons.push(
      new NextCharacter(
        (this.canvas.width / 4) * 3 - 143,
        this.canvas.height / 2 - 89,
        1,
        this.canvas
      )
    );

    //Making the left arrow for level selector
    this.buttons.push(
      new PreviousWorld(
        (this.canvas.width / 7) * 2,
        this.canvas.height / 3 - 89,
        this.canvas
      )
    );

    //Making the right arrow for level selector
    this.buttons.push(
      new NextWorld(
        (this.canvas.width / 7) * 5 - 143,
        this.canvas.height / 3 - 89,
        1,
        this.canvas
      )
    );

    //QandA Button
    this.buttons.push(
      new QuestionsAnswersButton(this.canvas.width - 180, 50, this.canvas)
    );
  }

  private deleteButtons() {
    this.buttons.splice(0, 1);
    this.buttons.splice(0, 1);
    this.buttons.splice(0, 1);
    this.buttons.splice(0, 1);
    this.buttons.splice(0, 1);
    this.buttons.splice(0, 1);
    this.buttons.splice(0, 1);
    this.buttons.splice(0, 1);
  }
}
