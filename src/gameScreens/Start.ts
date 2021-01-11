class Start {
  //Attributes
  private canvas: HTMLCanvasElement;
  private wallet: number;
  private buttons: Button[];
  private worldImages: Images[];
  private characterImages: Images[];
  private images: Images[];
  private background: Images[];
  private indexCounterWorld: number;
  private indexCounterCharacter: number;

  //Constructor
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //The button array
    this.buttons = [];

    //The world images array
    this.worldImages = [];

    //The world images array
    this.characterImages = [];

    //The overall image array
    this.images = [];

    //Background cloud array
    this.background = [];

    //Your total coin value
    this.wallet = 0;

    //Index counter for world
    this.indexCounterWorld = 0;

    //Index counter for charachter
    this.indexCounterCharacter = 0;

    //Calling the button maker method.
    this.buttonMaker();

    //Calling the IMG maker method
    this.worldImageMaker();

    //Calling the character maker method.
    this.charachterMaker();

    //Calling the image maker method
    this.imageMaker();

    //Background loop
    this.backgroundLoop();
    //The game loop.
    this.loop();

    //The clickhandler
    document.addEventListener("click", this.mouseHandler);

    //TEST AREA
  }

  /**
   * Method for the Game Loop
   */
  public loop = () => {
    //Draws everythin while in the loop
    this.draw();

    //#TODO you can remove this after you are fine with the code, for now there is a counter in the top left of your screen.
    this.wallet++;

    // in the first loop no images are loaded
    requestAnimationFrame(this.loop);

    //TEST AREA
  };

  /**
   * Draws all the necessary elements to the canvas
   */
  public draw() {
    const ctx = this.canvas.getContext("2d");

    //Clears the canvas every frame
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Background cloud #TODO Make it reload
    this.background.forEach((backgroundImage) => {
      backgroundImage.draw(ctx);
      backgroundImage.move(this.canvas);
      backgroundImage.reloadImage(this.canvas);
    });

    //Draws all the images
    this.images.forEach((image) => {
      image.draw(ctx);
    });

    //Draws all the buttons
    this.buttons.forEach((button) => {
      button.draw(ctx);
    });

    //Drawing the characters
    for (let i = 0; i < this.characterImages.length; i++) {
      this.characterImages[this.indexCounterCharacter].draw(ctx);
    }

    //Forloop to decide what world img is goint to be drawed
    for (let i = 0; i < this.worldImages.length; i++) {
      this.worldImages[this.indexCounterWorld].draw(ctx);
    }

    //Writing the total amount of coins to the top left of your screen
    Start.writeTextToCanvas(ctx, `${this.wallet}`, 40, 60, 80);
  }

  private buttonMaker() {
    
     
    //Initializing the buttons and pushing them to the array
    //Making the start button
    this.buttons.push(
      new StartGameButton(
        this.canvas.width / 2 - 329 / 2, //Fix this secton for centering no magic numbers #TODO
        (this.canvas.height / 5) * 4 - 100 / 2 //Fix this secton for centering no magic numbers #TODO
      )
    );

    //Making the shop button
    this.buttons.push(
      new ShopButton(
        this.canvas.width / 5 - 329 / 2,
        (this.canvas.height / 6) * 4
      )
    );

    //Making the highscore button
    this.buttons.push(
      new HighscoreButton(
        (this.canvas.width / 5) * 4 - 329 / 2,
        (this.canvas.height / 6) * 4
      )
    );

    //Making the left arrow for character selector
    this.buttons.push(
      new PreviousCharacter(this.canvas.width / 4, this.canvas.height / 2 - 89)
    );

    //Making the right arrow for character selector
    this.buttons.push(
      new NextCharacter(
        (this.canvas.width / 4) * 3 - 143,
        this.canvas.height / 2 - 89,
        1
      )
    );

    //Making the left arrow for level selector
    this.buttons.push(
      new PreviousWorld(
        (this.canvas.width / 7) * 2,
        this.canvas.height / 3 - 89
      )
    );

    //Making the right arrow for level selector
    this.buttons.push(
      new NextWorld(
        (this.canvas.width / 7) * 5 - 143,
        this.canvas.height / 3 - 89,
        1
      )
    );

    //QandA Button
    this.buttons.push(new QuestionsAnswersButton(this.canvas.width - 124, 0));

    //Settings Button
    this.buttons.push(new SettingsButton(this.canvas.width - 124, 124));
  }

  private worldImageMaker() {
    this.worldImages.push(
      new OceanImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 130)
    );

    this.worldImages.push(
      new DesertImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 80)
    );

    this.worldImages.push(
      new SwampImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 90)
    );

    this.worldImages.push(
      new ArticImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 110)
    );
  }

  private charachterMaker() {
    this.characterImages.push(
      new AmongUsChar(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120)
    );

    this.characterImages.push(
      new Stickman(this.canvas.width / 2 - 48, this.canvas.height / 2 - 120)
    );

    this.characterImages.push(
      new YoshiUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120)
    );

    this.characterImages.push(
      new YellowAmongUsUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120)
    );

    this.characterImages.push(
      new MortyUnlocked(this.canvas.width / 2 - 50, this.canvas.height / 2 - 120)
    );

    this.characterImages.push(
      new AshUnlocked(this.canvas.width / 2 - 50, this.canvas.height / 2 - 120)
    );
  }

  private imageMaker() {
    this.images.push(new Titel(this.canvas.width / 4, -40));
  }

  private backgroundLoop() {
    this.background.push(new Cloud(0, this.canvas.height / 4, 0.5));
  }

  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent): void => {
    //console.log(`xPos ${event.clientX}, yPos ${event.clientY}`); //Check what pos is clicked on the screen.
    this.buttons.forEach((button) => {
      if (
        event.clientX >= button.getButtonXPos() &&
        event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
        event.clientY >= button.getButtonYPos() &&
        event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()
      ) {
        this.worldSelector(button);
        this.characterSelector(button);
        this.startLevel(button);
      }
    });
  };

  /**
   * Method to select the world you want to play.
   * @param button
   */
  private worldSelector(button: Button) {
    if (
      this.indexCounterWorld == this.worldImages.length - 1 &&
      button.getButtonName() == "NextWorld"
    ) {
      this.indexCounterWorld = 0;
    } else if (
      this.indexCounterWorld == 0 &&
      button.getButtonName() == "PreviousWorld"
    ) {
      this.indexCounterWorld += this.worldImages.length - 1;
    } else if (
      button.getButtonName() == "PreviousWorld" &&
      this.indexCounterWorld > 0
    ) {
      this.indexCounterWorld -= 1;
    } else if (button.getButtonName() == "NextWorld") {
      this.indexCounterWorld += 1;
    }
  }

  /**
   * Method to select the character you want to play.
   * @param button
   */

  private characterSelector(button: Button) {
    if (
      this.indexCounterCharacter == this.characterImages.length - 1 &&
      button.getButtonName() == "NextCharacter"
    ) {
      this.indexCounterCharacter = 0;
    } else if (
      this.indexCounterCharacter == 0 &&
      button.getButtonName() == "PreviousCharacter"
    ) {
      this.indexCounterCharacter += this.characterImages.length - 1;
    } else if (
      button.getButtonName() == "PreviousCharacter" &&
      this.indexCounterCharacter > 0
    ) {
      this.indexCounterCharacter -= 1;
    } else if (button.getButtonName() == "NextCharacter") {
      this.indexCounterCharacter += 1;
    }
  }

  private startLevel(button: Button) {
    if (
      button.getButtonName() == "StartGame" &&
      this.worldImages[this.indexCounterWorld].getImageName() == "Ocean"
    ) {
      new OceanWorld(
        this.canvas,
        this.worldImages[this.indexCounterWorld].getImageName(),
      );
    } else if (
      button.getButtonName() == "StartGame" &&
      this.worldImages[this.indexCounterWorld].getImageName() == "Artic"
    ) {
      new ArticWorld(
        this.canvas,
        this.worldImages[this.indexCounterWorld].getImageName(),
      );
    } else if (
      button.getButtonName() == "StartGame" &&
      this.worldImages[this.indexCounterWorld].getImageName() == "Desert"
    ) {
      new DesertWorld(
        this.canvas,
        this.worldImages[this.indexCounterWorld].getImageName(),
      );
    } else if (
      button.getButtonName() == "StartGame" &&
      this.worldImages[this.indexCounterWorld].getImageName() == "Swamp"
    ) {
      new SwampWorld(
        this.canvas,
        this.worldImages[this.indexCounterWorld].getImageName(),
      );
    }

    //this.player.push(new AmongUs(this.canvas, "AmongUs"));
    //push player to array of Player[] 
  }

  /**
   * Writes text to the canvas
   * @param {string} text - Text to write
   * @param {number} fontSize - Font size in pixels
   * @param {number} xCoordinate - Horizontal coordinate in pixels
   * @param {number} yCoordinate - Vertical coordinate in pixels
   * @param {string} alignment - Where to align the text
   * @param {string} color - The color of the text
   */
  public static writeTextToCanvas(
    ctx: CanvasRenderingContext2D,
    text: string,
    fontSize: number = 20,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = "center",
    color: string = "black"

  ) {
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = color;
    ctx.textAlign = alignment;
    ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Renders a random number between min and max
   * @param {number} min - minimal time
   * @param {number} max - maximal time
   */
  public static randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  /**
   * Loads an image so it doesn't flicker
   * @param {HTMLImageElement} source
   * @return HTMLImageElement - returns an image
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }
}