class DangerDash {
  //#TODO make abstract class GameScreen or Screens
  private canvas: HTMLCanvasElement;
  private earnedCoins: number;
  private DangerDashFrame: number;
  private buttons: Button[];

  private start: Start;
  private shop: Shop;
  private highScore: HighScore;
  private generalQuestions: GeneralQuestions;

  private screenName: string;

  public constructor(canvas: HTMLCanvasElement) {
    //canvas
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.earnedCoins = 0;
    this.screenName = "StartScreen";

    this.start = new Start(this.canvas);
    this.shop = new Shop(this.canvas);
    //this.highScore = new HighScore(this.canvas);
    this.generalQuestions = new GeneralQuestions(this.canvas);

    this.DangerDashFrame = 0;

    this.buttons = [];

    //Adding an EventListener for clickdetection
    document.addEventListener("click", this.mouseHandlerStart);

    //Calling the loop
    this.loop();
  }

  /**
   * Method that checks the gamestate
   */
  public loop = () => {
    //Counting Frames of main loop
    this.DangerDashFrame++;
    //console.log(this.DangerDashFrame);

    if (this.screenName === "StartScreen") {

      //Draws startScreen
      this.start.draw();

      if(this.DangerDashFrame === 1){
        //Pushing the startButtons
        this.buttonMakerStartScreen();
        console.log(this.buttons);
      }
      
      //Draws all the buttons
      this.buttons.forEach((button) => {
        button.draw();
      });
    }

    if(this.screenName === "GameScreen"){
      console.log("GAME RUNNING");
      //clears the array of buttons
      this.buttons = [];
      console.log(this.buttons);
    }

    if(this.screenName === "ShopScreen"){
      console.log("SHOP RUNNING");
      this.shop.draw();
    }

    if(this.screenName === "HighScoreScreen"){
      console.log("Highscore RUNNING");
      //TODO highscore loop weghalen
    }

    if(this.screenName === "Q&AScreen"){
      console.log("Q&A RUNNING");
      this.generalQuestions.draw();
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
    this.buttons.forEach((button) => {
      if (
        event.clientX >= button.getButtonXPos() &&
        event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
        event.clientY >= button.getButtonYPos() &&
        event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()
      ) {
        //Based on the screenName you have a clickDetection
        if(this.screenName === "StartScreen") {
          this.startScreenDetection(button); 
        } 
      } else {
        return null;
      }
    });
  };

  /**
   * Startscreen button detections that if you click on a certain button the screenName will be changed
   * @param button 
   */
  private startScreenDetection(button: Button) {
    this.start.worldSelector(button);
    this.start.characterSelector(button);
    button.logButtonName();
    if (button.getButtonName() === "StartGame") {
      this.screenName = "GameScreen";
      console.log(this.screenName);
      this.start.checkCharacterName(button);
    } else if (button.getButtonName() === "Shop") {
      this.screenName = "ShopScreen";
    } else if (button.getButtonName() === "HighScore") {
      this.screenName = "HighScoreScreen";
    } else if (button.getButtonName() === "QandA") {
      this.screenName = "Q&AScreen";
    }
  }

  //Pushing buttons to buttons[]
  private buttonMakerStartScreen() {
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

  //Clears the Buttons[] and makes it empty again
  private deleteButtons() {
    this.buttons = [];
  }
}
