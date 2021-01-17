class DangerDash {
  //#TODO make abstract class GameScreen or Screens
  private canvas: HTMLCanvasElement;
  private earnedCoins: number;
  private DangerDashFrame: number;
  private buttons: Button[];
  private images: Images[];

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
    this.highScore = new HighScore(this.canvas);
    this.generalQuestions = new GeneralQuestions(this.canvas);

    this.DangerDashFrame = 0;

    this.buttons = [];
    this.images = [];

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
    //console.log(this.buttons);

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
      console.log("GAME RUNNING");
    }

    if (this.screenName === "ShopScreen") {
      console.log("SHOP RUNNING");
      //FirstFrame sets buttons in the buttons[]
      if (this.DangerDashFrame === 1) {
        this.buttonMakerShopScreen();
      }
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
    console.log(`xPos ${event.clientX}, yPos ${event.clientY}`); //Check what pos is clicked on the screen.
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
        } else if (this.screenName === "GameScreen") {
          //ree
        } else if (this.screenName === "ShopScreen") {
          this.ShopScreenDetection(button);
        } else if (this.screenName === "HighScoreScreen") {
          this.HighScoreScreenDetection(button);
        } else if (this.screenName === "Q&AScreen") {
          this.QAndAScreenDetection(button);
        }
      } else {
        return null;
      }
    });
  };

  /**
   * ShopScreen button detections that if you click on a certain button the screenName will be changed
   * @param button
   */
  private ShopScreenDetection(button: Button) {
    if (button.getButtonName() === "BackToStart") {
      this.screenName = "StartScreen";
      this.resetButtonsAndDangerDashFrame();
    } if (button.getButtonName() === "UnlockYoshi") {
      this.images.push(
        new YoshiUnlocked(this.canvas.width / 7.9, this.canvas.height / 6)
      );
    } else if (button.getButtonName() === "UnlockAmongUs") {
      this.images.push(
        new YellowAmongUsUnlocked(
          this.canvas.width / 2.9,
          this.canvas.height / 6
        )
      );
    } else if (button.getButtonName() === "UnlockGirlCharacter") {
      this.images.push(
        new GirlCharacterUnlocked(
          this.canvas.width / 1.75,
          this.canvas.height / 6
        )
      );
    } else if (button.getButtonName() === "UnlockSonic") {
      this.images.push(
        new SonicUnlocked(
          this.canvas.width / 1.29,
          this.canvas.height / 6
        )
      );
    } else if (button.getButtonName() === "UnlockSwamp") {
      this.images.push(
        new SwampPlanetUnlocked(
          this.canvas.width / 2.33,
          this.canvas.height / 1.64
        )
      );
    } else if (button.getButtonName() === "UnlockDesert") {
      this.images.push(
        new DesertPlanetUnlocked(
          this.canvas.width / 4.3,
          this.canvas.height / 1.6
        )
      );
    } else if (button.getButtonName() === "UnlockArctic") {
      this.images.push(
        new ArcticPlanetUnlocked(
          this.canvas.width / 1.56,
          this.canvas.height / 1.646
        )
      );
    }
  }

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
    this.start.worldSelector(button);
    this.start.characterSelector(button);
    button.logButtonName();
    if (button.getButtonName() === "StartGame") {
      this.screenName = "GameScreen";
      this.start.checkCharacterName(button);
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

  //Pushing the Shop-Buttons to buttons[]
  private buttonMakerShopScreen() {
    this.buttons.push(
      new BackToStart(
        (this.canvas.width / 5) * 0.05,
        (this.canvas.height / 5) * 0.09,
        this.canvas
      )
    );

    // Unlock buttons for the worlds
    this.buttons.push(
      new UnlockDesert(
        this.canvas.width / 4.5,
        this.canvas.height / 1.08,
        this.canvas
      )
    );
    this.buttons.push(
      new UnlockArctic(
        this.canvas.width / 1.56,
        this.canvas.height / 1.08,
        this.canvas
      )
    );
    this.buttons.push(
      new UnlockSwamp(
        this.canvas.width / 2.31,
        this.canvas.height / 1.08,
        this.canvas
      )
    );

    /// Unlock buttons for the characters
    this.buttons.push(
      new UnlockYoshi(
        this.canvas.width / 9,
        this.canvas.height / 2.15,
        this.canvas
      )
    );
    this.buttons.push(
      new UnlockAmongUs(
        this.canvas.width / 3.1,
        this.canvas.height / 2.15,
        this.canvas
      )
    );
    this.buttons.push(
      new UnlockGirlCharacter(
        this.canvas.width / 1.87,
        this.canvas.height / 2.15,
        this.canvas
      )
    );
    this.buttons.push(
      new UnlockSonic(
        this.canvas.width / 1.34,
        this.canvas.height / 2.15,
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
