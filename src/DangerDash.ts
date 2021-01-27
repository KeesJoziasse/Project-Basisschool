/**
 * Class DangerDash 
 * Has main Loop of the game
 */
class DangerDash {
  //canvas
  protected canvas: HTMLCanvasElement;

  //static properties
  protected earnedCoins: number;
  private screenName: string;
  private worldName: string;
  private DangerDashFrame: number;
  private characterName: string;

  //Screens
  private start: Start;
  private shop: Shop;
  private highScore: HighScore;
  private generalQuestions: GeneralQuestions;
  private inGameQuestions: InGameQuestions;
  private endscreen: Endscreen;

  //worlds
  private oceanWorld: OceanWorld;
  private desertWorld: DesertWorld;
  private swampWorld: SwampWorld;
  private articWorld: ArticWorld;

  //Array's
  private buttons: Button[];
  private shopButtons: Button[];
  private images: Images[];
  private highscores: [];

  public constructor(canvas: HTMLCanvasElement) {
    //canvas
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //Static properties
    this.earnedCoins = 10;
    this.screenName = "StartScreen";
    this.worldName = "";
    this.DangerDashFrame = 0;
    this.characterName = "";

    //Screens
    this.start = new Start(this.canvas);
    this.shop = new Shop(this.canvas);
    this.highScore = new HighScore(this.canvas);
    this.generalQuestions = new GeneralQuestions(this.canvas);
    this.inGameQuestions = new InGameQuestions(this.canvas);

    //Worlds
    this.oceanWorld = new OceanWorld(this.canvas);
    this.desertWorld = new DesertWorld(this.canvas);
    this.swampWorld = new SwampWorld(this.canvas);
    this.articWorld = new ArticWorld(this.canvas);

    //Array's
    this.shopButtons = [];
    this.buttons = [];
    this.images = [];
    this.highscores = [];

    //Methods
    this.buttonMakerShopScreen();

    //Adding an EventListener for clickdetection
    document.addEventListener("click", this.mouseHandlerStart);

    //Calling the loop
    this.loop();
  }

  //Getter
  public getCharacterName(): string{
    return this.characterName;
  }

  /**
   * Method that checks the screenstate
   */
  public loop = () => {
    //Counting Frames of main loop

    this.DangerDashFrame++;
    if (this.screenName === "StartScreen") {
      //FirstFrame sets buttons in the buttons[]
      if (this.DangerDashFrame === 1) {
        this.buttonMakerStartScreen();
      }
      //Draws startScreen
      this.start.draw();
      //Draws all the buttons
      this.buttons.forEach((button) => {
        button.draw();
      });
    }

    if (this.screenName === "GameScreen") {
      //Based on the starstcreen there will be created a new world class
      //with the right character chosen on startscreen

      //Based on the worldName chosen in Startscreen a world will be called.
      if (this.worldName === "OceanWorld") {
        if(this.DangerDashFrame === 1){
          this.inGameQuestions.randomQuestionGenerator();
        }
        this.oceanWorld.increaseFrame();
        this.oceanWorld.draw();
        this.oceanWorld.forScoringItems();
        this.oceanWorld.scoringItemIndex();
        this.oceanWorld.movePlayer();
        if(this.oceanWorld.getLives() === -1){
          this.screenName = "EndScreen";
          this.earnedCoins += this.oceanWorld.getEarnedCoins();
          this.resetButtonsAndDangerDashFrame();
        } else if (this.oceanWorld.getQuestionStatus() === "Question"){
          this.resetButtonsAndDangerDashFrame();
          this.screenName = "Question";
        }
      } else if (this.worldName === "ArticWorld") {
        if(this.DangerDashFrame === 1){
          this.inGameQuestions.randomQuestionGenerator();
        }
        this.articWorld.increaseFrame();
        this.articWorld.draw();
        this.articWorld.forScoringItems();
        this.articWorld.scoringItemIndex();
        this.articWorld.movePlayer();
        if(this.articWorld.getLives() === -1){
          this.screenName = "EndScreen";
          this.earnedCoins += this.articWorld.getEarnedCoins();
          this.resetButtonsAndDangerDashFrame();
        } else if (this.articWorld.getQuestionStatus() === "Question"){
          this.resetButtonsAndDangerDashFrame();
          this.screenName = "Question";
        }
      } else if (this.worldName === "DesertWorld") {
        if(this.DangerDashFrame === 1){
          this.inGameQuestions.randomQuestionGenerator();
        }
        this.desertWorld.increaseFrame();
        this.desertWorld.draw();
        this.desertWorld.forScoringItems();
        this.desertWorld.scoringItemIndex();
        this.desertWorld.movePlayer();
        if(this.desertWorld.getLives() === -1){
          this.screenName = "EndScreen";
          this.earnedCoins += this.desertWorld.getEarnedCoins();
          this.resetButtonsAndDangerDashFrame();
        } else if (this.desertWorld.getQuestionStatus() === "Question"){
          this.resetButtonsAndDangerDashFrame();
          this.screenName = "Question";
        }
      } else if (this.worldName === "SwampWorld") {
        if(this.DangerDashFrame === 1){
          this.inGameQuestions.randomQuestionGenerator();
        }
        this.swampWorld.increaseFrame();
        this.swampWorld.draw();
        this.swampWorld.forScoringItems();
        this.swampWorld.scoringItemIndex();
        this.swampWorld.movePlayer();
        if(this.swampWorld.getLives() === -1){
          this.screenName = "EndScreen";
          this.earnedCoins += this.swampWorld.getEarnedCoins();
          this.resetButtonsAndDangerDashFrame();
        } else if (this.oceanWorld.getQuestionStatus() === "Question"){
          this.resetButtonsAndDangerDashFrame();
          this.screenName = "Question";
        }
      }

    }

    if (this.screenName === "Question") {
      this.DangerDashFrame++;
      if (this.DangerDashFrame === 1) {
        this.buttonMakerQuestionScreen();
        this.inGameQuestions.draw();
      }
    }

    if(this.screenName === "QuestionGoodAnswer"){
      if(this.DangerDashFrame === 1){
        this.inGameQuestions.drawAfterGoodAnswer();

        //Based on the world
        if(this.worldName === "OceanWorld"){
          this.oceanWorld.clearScoringItems();
          this.oceanWorld.addTenCoins();
        } else if(this.worldName === "ArticWorld"){
          this.articWorld.clearScoringItems();
          this.articWorld.addTenCoins();
        } else if(this.worldName === "DesertWorld"){
          this.desertWorld.clearScoringItems();
          this.desertWorld.addTenCoins();
        } else if(this.worldName === "SwampWorld"){
          this.swampWorld.clearScoringItems();
          this.swampWorld.addTenCoins();
        } 

      }
      if(this.DangerDashFrame === 300){
        this.resetButtonsAndDangerDashFrame();
        this.screenName = "GameScreen";
      }
    }

    if(this.screenName === "QuestionBadAnswer"){
      if(this.DangerDashFrame === 1){
        this.inGameQuestions.drawAfterBadAnswer();

        //Based on the world
        if(this.worldName === "OceanWorld"){
          this.oceanWorld.clearScoringItems();
          this.oceanWorld.minusOneLife();
        } else if(this.worldName === "ArticWorld"){
          this.articWorld.clearScoringItems();
          this.articWorld.minusOneLife();
        } else if(this.worldName === "DesertWorld"){
          this.desertWorld.clearScoringItems();
          this.desertWorld.minusOneLife();
        } else if(this.worldName === "SwampWorld"){
          this.swampWorld.clearScoringItems();
          this.swampWorld.minusOneLife();
        } 
      }
      if(this.DangerDashFrame === 300){
        this.resetButtonsAndDangerDashFrame();
        this.screenName = "GameScreen";
      }
    }

    if (this.screenName === "EndScreen") {
      if(this.DangerDashFrame === 0){
        this.buttonMakerEndScreen();
        if(this.worldName === "OceanWorld"){
          this.endscreen = new Endscreen(this.canvas, this.oceanWorld.getScore());
        } else if(this.worldName === "ArticWorld"){
          this.endscreen = new Endscreen(this.canvas, this.articWorld.getScore());
        } else if(this.worldName === "DesertWorld"){
          this.endscreen = new Endscreen(this.canvas, this.desertWorld.getScore());
        } else if(this.worldName === "SwampWorld"){
          this.endscreen = new Endscreen(this.canvas, this.swampWorld.getScore());
        } 
        
      }
      
      console.log(this.buttons)
      this.endscreen.draw();
    }

    if (this.screenName === "ShopScreen") {
      this.DrawShop();
    }

    if (this.screenName === "HighScoreScreen") {
      //FirstFrame sets buttons in the buttons[]
      if (this.DangerDashFrame === 1) {
        this.buttonMakerGeneralQuestions();
      }
      this.highScore.draw();
    }

    if (this.screenName === "Q&AScreen") {
      //FirstFrame sets buttons in the buttons[]
      if (this.DangerDashFrame === 1) {
        this.buttonMakerGeneralQuestions();
      }
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
    // console.log(`xPos ${event.clientX}, yPos ${event.clientY}`); //Check what pos is clicked on the screen.
    this.buttons.forEach((button) => {
      if (
        event.clientX >= button.getButtonXPos() &&
        event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
        event.clientY >= button.getButtonYPos() &&
        event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()
      ) {
        //Based on the screenName you have a clickDetection
        if (this.screenName === "StartScreen") {
          this.startScreenDetection(button);
        } else if (this.screenName === "HighScoreScreen") {
          this.HighScoreScreenDetection(button);
        } else if (this.screenName === "Q&AScreen") {
          this.QAndAScreenDetection(button);
        } else if (this.screenName === "EndScreen"){
          this.EndScreenDetection(button);
        } else if (this.screenName === "Question"){
          this.QuestionScreenDetection(button);
        }
      } else {
        return null;
      }
    });
    //Special button detection for the shop because the buttons will be pushed to seperate array
    this.shopButtons.forEach((button) => {
      if (
        event.clientX >= button.getButtonXPos() &&
        event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
        event.clientY >= button.getButtonYPos() &&
        event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()
      ) {
        if (this.screenName === "ShopScreen") {
          this.ShopScreenDetection(button);
        }
      }
    });
  };

  /**
   * Yes & No Button Detection checks if the answer is correct and changes screenName
   * @param button 
   */
  private QuestionScreenDetection(button: Button) {
    if (button.getButtonName() === "YesButton") {
      if (this.inGameQuestions.getAnswerCheck() === "yes") {
        //console.log("goed antwoord :)");
        this.resetButtonsAndDangerDashFrame();
        this.screenName = "QuestionGoodAnswer";
      } else if (this.inGameQuestions.getAnswerCheck() === "no") {
        //console.log("sad wrong asnwer :(");
        this.resetButtonsAndDangerDashFrame();
        this.screenName = "QuestionBadAnswer";
      }
    } else if (button.getButtonName() === "NoButton") {
      if (this.inGameQuestions.getAnswerCheck() === "no") {
        //console.log("goed antwoord :)");
        this.resetButtonsAndDangerDashFrame();
        this.screenName = "QuestionGoodAnswer";
      } else if (this.inGameQuestions.getAnswerCheck() === "yes") {
        //console.log("sad wrong asnwer :(");
        this.resetButtonsAndDangerDashFrame();
        this.screenName = "QuestionBadAnswer";
      }
    }
  }

/**
 * Endscreen button detections that if you click on a certain button the screenName will be changed
 * @param button 
 */
  private EndScreenDetection(button: Button) {
    if (button.getButtonName() === "RestartButton") {
      this.resetButtonsAndDangerDashFrame();
      this.screenName = "StartScreen";
    }
  }

  /**
   * Draws the Shop (images,buttons, + earnedCoins(Dynamic))
   */
  private DrawShop() {
    this.shop.draw();
    // Amount of money in the player's bank
    const ctx = this.canvas.getContext("2d");
    Utility.writeTextToCanvas(
      ctx,
      `${this.earnedCoins}`,
      60,
      this.canvas.width / 2,
      this.canvas.height / 10,
      "center",
      "white"
    );

    this.images.forEach((image) => {
      image.draw(ctx);
    });
    this.shopButtons.forEach((button) => {
      button.draw();
    });
  }

  /**
   * ShopScreen button detections that if you click on a certain button the screenName will be changed
   * @param button
   */
  private ShopScreenDetection(button: Button) {
    if (button.getButtonName() === "BackToStart") {
      this.screenName = "StartScreen";
      this.resetButtonsAndDangerDashFrame();
    }
    //UnlockButtons
    if (button.getButtonName() === "UnlockYoshi" && this.earnedCoins >= 15) {
      this.earnedCoins -= 15;
      this.images.push(
        new YoshiUnlocked(this.canvas.width / 7.9, this.canvas.height / 6)
      );
      this.DeleteSpecificShopButton("UnlockYoshi");
      this.start.pushYoshi();
      console.log(this.images);
    } else if (
      button.getButtonName() === "UnlockAmongUs" &&
      this.earnedCoins >= 30
    ) {
      this.earnedCoins -= 30;
      this.images.push(
        new YellowAmongUsUnlocked(
          this.canvas.width / 2.9,
          this.canvas.height / 6
        )
      );
      this.DeleteSpecificShopButton("UnlockAmongUs");
      this.start.pushYellowAmongUs();
    } else if (
      button.getButtonName() === "UnlockGirlCharacter" &&
      this.earnedCoins >= 45
    ) {
      this.earnedCoins -= 45;
      this.images.push(
        new GirlCharacterUnlocked(
          this.canvas.width / 1.75,
          this.canvas.height / 6
        )
      );
      this.DeleteSpecificShopButton("UnlockGirlCharacter");
      this.start.pushGirl();
    } else if (
      button.getButtonName() === "UnlockSonic" &&
      this.earnedCoins >= 60
    ) {
      this.earnedCoins -= 60;
      this.images.push(
        new SonicUnlocked(this.canvas.width / 1.29, this.canvas.height / 6)
      );
      this.DeleteSpecificShopButton("UnlockSonic");
      this.start.pushSonic();
    } else if (
      button.getButtonName() === "UnlockSwamp" &&
      this.earnedCoins >= 50
    ) {
      this.earnedCoins -= 50;
      this.images.push(
        new SwampPlanetUnlocked(
          this.canvas.width / 2.33,
          this.canvas.height / 1.64
        )
      );
      this.DeleteSpecificShopButton("UnlockSwamp");
      this.start.pushSwamp();
    } else if (
      button.getButtonName() === "UnlockDesert" &&
      this.earnedCoins >= 25
    ) {
      this.earnedCoins -= 25;
      this.images.push(
        new DesertPlanetUnlocked(
          this.canvas.width / 4.3,
          this.canvas.height / 1.6
        )
      );
      this.DeleteSpecificShopButton("UnlockDesert");
      this.start.pushDesert();
    } else if (
      button.getButtonName() === "UnlockArctic" &&
      this.earnedCoins >= 75
    ) {
      this.earnedCoins -= 75;
      this.images.push(
        new ArcticPlanetUnlocked(
          this.canvas.width / 1.56,
          this.canvas.height / 1.646
        )
      );
      this.DeleteSpecificShopButton("UnlockArctic");
      this.start.pushArtic();
    }
  }

  /**
   * Splices the right button based on name
   * @param buttonname name of the button that will be deleted
   */
  private DeleteSpecificShopButton(buttonname: string) {
    this.shopButtons.forEach((button, index) => {
      if (button.getButtonName() === `${buttonname}`) {
        this.shopButtons.splice(index, 1);
      }
    });
  }

  /**
   * HighScorescreen button detections that if you click on a certain button the screenName will be changed
   * @param button
   */
  private HighScoreScreenDetection(button: Button) {
    if (button.getButtonName() === "BackToStart") {
      this.screenName = "StartScreen";
      this.resetButtonsAndDangerDashFrame();
    }
  }

  /**
   * QAndAscreen button detections that if you click on a certain button the screenName will be changed
   * @param button
   */
  private QAndAScreenDetection(button: Button) {
    if (button.getButtonName() === "BackToStart") {
      this.screenName = "StartScreen";
      this.resetButtonsAndDangerDashFrame();
    }
  }

  /**
   * Startscreen button detections that if you click on a certain button the screenName will be changed
   * @param button
   */
  private startScreenDetection(button: Button) {
    //Makes the arrow slecetors work
    this.start.worldSelector(button);
    this.start.characterSelector(button);
    //Logs the button name that is clicked

    button.logButtonName();
    if (button.getButtonName() === "StartGame") {
      if (this.screenName === "Endscreen") {
        this.screenName = "Endscreen";
      }
      this.start.startLevel(button);
      this.characterName = this.start.getCharacterName();
      this.screenName = "GameScreen";
      this.worldName = this.start.getWorldName();
      //Based on the world
      if(this.worldName === "OceanWorld"){
        console.log("been here")
        this.oceanWorld.resetGame();
        this.oceanWorld.createPlayer(this.characterName);
      } else if(this.worldName === "ArticWorld"){
        this.articWorld.resetGame();
        this.articWorld.createPlayer(this.characterName);
      } else if(this.worldName === "DesertWorld"){
        this.desertWorld.resetGame();
        this.desertWorld.createPlayer(this.characterName);
      } else if(this.worldName === "SwampWorld"){
        this.swampWorld.resetGame();
        this.swampWorld.createPlayer(this.characterName);
      } 
      
      //Clears the ButtonArray
      this.resetButtonsAndDangerDashFrame();
    } else if (button.getButtonName() === "Shop") {
      this.screenName = "ShopScreen";
      //Clears the ButtonArray
      this.resetButtonsAndDangerDashFrame();
    } else if (button.getButtonName() === "HighScore") {
      this.screenName = "HighScoreScreen";
      //Clears the ButtonArray
      this.resetButtonsAndDangerDashFrame();
    } else if (button.getButtonName() === "QandA") {
      this.screenName = "Q&AScreen";
      //Clears the ButtonArray
      this.resetButtonsAndDangerDashFrame();
    }
  }

  //Pushing GeneralQuestions-Buttons to buttons[]
  private buttonMakerGeneralQuestions() {
    this.buttons.push(
      new BackToStart(
        (this.canvas.width / 5) * 0.05,
        (this.canvas.height / 5) * 0.09,
        this.canvas
      )
    );
  }

  //Pushing Start-Buttons to buttons[]
  private buttonMakerStartScreen() {
    //Initializing the buttons and pushing them to the array
    //Making the start button
    this.buttons.push(
      new StartGameButton(
        this.canvas.width / 2 - 329 / 2, 
        (this.canvas.height / 5) * 4 - 100 / 2, 
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

  //Pushing the Shop-Buttons to buttons[]
  private buttonMakerShopScreen() {
    this.shopButtons.push(
      new BackToStart(
        (this.canvas.width / 5) * 0.05,
        (this.canvas.height / 5) * 0.09,
        this.canvas
      )
    );

    // Unlock buttons for the worlds
    this.shopButtons.push(
      new UnlockDesert(
        this.canvas.width / 4.5,
        this.canvas.height / 1.08,
        this.canvas
      )
    );
    this.shopButtons.push(
      new UnlockArctic(
        this.canvas.width / 1.56,
        this.canvas.height / 1.08,
        this.canvas
      )
    );
    this.shopButtons.push(
      new UnlockSwamp(
        this.canvas.width / 2.31,
        this.canvas.height / 1.08,
        this.canvas
      )
    );

    /// Unlock buttons for the characters
    this.shopButtons.push(
      new UnlockYoshi(
        this.canvas.width / 9,
        this.canvas.height / 2.15,
        this.canvas
      )
    );
    this.shopButtons.push(
      new UnlockAmongUs(
        this.canvas.width / 3.1,
        this.canvas.height / 2.15,
        this.canvas
      )
    );
    this.shopButtons.push(
      new UnlockGirlCharacter(
        this.canvas.width / 1.87,
        this.canvas.height / 2.15,
        this.canvas
      )
    );
    this.shopButtons.push(
      new UnlockSonic(
        this.canvas.width / 1.34,
        this.canvas.height / 2.15,
        this.canvas
      )
    );
  }

  //Pushing the yes and no button to buttons[]
  private buttonMakerQuestionScreen(){
    this.buttons.push(
      new YesButton(
        (this.canvas.width / 3) * 1.05,
        (this.canvas.height / 2) * 1.5,
        this.canvas
      )
    );

    this.buttons.push(
      new NoButton(
        (this.canvas.width / 2) * 1.05,
        (this.canvas.height / 2) * 1.5,
        this.canvas
      )
    );
  }

  //Pushing the EndScreen-Buttons to button[]
  private buttonMakerEndScreen() {
    this.buttons.push(
      new RestartButton(
        this.canvas.width / 2.5,
        this.canvas.height / 1.5,
        this.canvas
      )
    );
  }

  //Clears the Buttons[] and makes it empty again
  private resetButtonsAndDangerDashFrame() {
    this.buttons = [];
    this.DangerDashFrame = 0;
  }
}
