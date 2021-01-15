class Shop {
  private canvas: HTMLCanvasElement;
  private image: HTMLImageElement;
  private shopImages: Images[];
  private buttons: Button[];
  private characters: Images[];
  private newWorlds: Images[];
  public name: string;
  private xPos: number;
  private yPos: number;
  private numSplice: number;

  public getButtonXPos(): number {
    return this.xPos;
  }

  public getButtonYPos(): number {
    return this.yPos;
  }

  /**
   * Returns the width of the image
   * @returns {number} - image width
   */
  public getButtonImageWidth(): number {
    return this.image.width;
  }

  /**
   * Returns the height of the image
   * @returns {number} - image height
   */
  public getButtonImageHeight(): number {
    return this.image.height;
  }



  //Constructor
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // The button array
    this.buttons = [];

    // The scoring item array
    this.shopImages = [];

    //Calls button maker function
    this.buttonMaker();

    // The unlockable player array
    this.characters = [];

    // The unlockable world array
    this.newWorlds = [];

    // Calls the character maker function
    this.drawUnlockableCharacter();

    // Calls the world maker function
    this.drawUnlockableWorlds();

    // Calls the image drawer function
    this.drawImages();
    
    //Calls the loop.
    this.loop();

    //Counter to splice
    this.numSplice = 1;

    // add an mouse event
    document.addEventListener("click", this.mouseHandler);

    this.draw();
  }

  public getButtonName(): string {
    return this.name;
  }

  /**
   * Method for the Game Loop
   */
  public loop = () => {
    this.draw();

    // in the first loop no images are loaded
    requestAnimationFrame(this.loop);
  };

  /**
   * Draws all the necessary elements to the canvas
   */
  public draw() {
    const ctx = this.canvas.getContext("2d");

    //Clears the canvas every frame
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.drawImage(GameItem.loadNewImage("./assets/img/background/EndscreenBackground.jpg"), 0, 0);

    this.buttons.forEach((button) => {
      button.draw(ctx);
    });

    // Amount of money in the player's bank
    Start.writeTextToCanvas(
      ctx,
      "200",
      60,
      this.canvas.width / 2,
      this.canvas.height / 10,
      "center",
      "white"
    );

    // Price of Stewie
    Start.writeTextToCanvas(
      ctx,
      "50",
      60,
      this.canvas.width / 5.8,
      this.canvas.height / 2.25,
      "center",
      "white"
    );

    // Price for yellow Among Us character
    Start.writeTextToCanvas(
      ctx,
      "50",
      60,
      this.canvas.width / 2.55,
      this.canvas.height / 2.25,
      "center",
      "white"
    );

    // Price for Ash
    Start.writeTextToCanvas(
      ctx,
      "50",
      60,
      this.canvas.width / 1.68,
      this.canvas.height / 2.25,
      "center",
      "white"
    );

    // Price for Morty
    Start.writeTextToCanvas(
      ctx,
      "50",
      60,
      this.canvas.width / 1.24,
      this.canvas.height / 2.25,
      "center",
      "white"
    );

    // Price for desert level
    Start.writeTextToCanvas(
      ctx,
      "100",
      60,
      this.canvas.width / 1.42,
      this.canvas.height / 1.10,
      "center",
      "white"
    );

    Start.writeTextToCanvas(
      ctx,
      "100",
      60,
      this.canvas.width / 2.01,
      this.canvas.height / 1.10,
      "center",
      "white"
    );

    Start.writeTextToCanvas(
      ctx,
      "100",
      60,
      this.canvas.width / 3.4,
      this.canvas.height / 1.10,
      "center",
      "white"
    );

    // Drawing the images
    this.shopImages.forEach((characterImage) => {
      characterImage.move(this.canvas);
      characterImage.reloadImage(this.canvas);
      characterImage.draw(ctx);
    });

    //Drawing the characters
    this.characters.forEach((character) => {
      character.move(this.canvas);
      character.reloadImage(this.canvas);
      character.draw(ctx);
    });

    //Drawing the worlds
    this.newWorlds.forEach((world) => {
      world.move(this.canvas);
      world.reloadImage(this.canvas);
      world.draw(ctx);
    });
  }

  //test //Delete
  public drawUnlockables(button: Button, ctx: CanvasRenderingContext2D) {
    if (button.getButtonName() === "UnlockYoshi") {
      ctx.drawImage(
        GameItem.loadNewImage("./assets/img/players/YoshiUnlocked.png"),
        this.canvas.width / 7.9,
        this.canvas.width / 6
      );
    }
  }

  public drawImages() {
    // Draw coins
    // #TODO fix code duplication
    this.shopImages.push(
      new coinForShop(this.canvas.width / 2.3, this.canvas.height / 1.17)
    );
    this.shopImages.push(
      new coinForShop(this.canvas.width / 4.4, this.canvas.height / 1.17)
    );
    this.shopImages.push(
      new coinForShop(this.canvas.width / 1.56, this.canvas.height / 1.17)
    );
    this.shopImages.push(
      new coinForShop(this.canvas.width / 3, this.canvas.height / 2.56)
    );
    this.shopImages.push(
      new coinForShop(this.canvas.width / 1.33, this.canvas.height / 2.56)
    );
    this.shopImages.push(
      new coinForShop(this.canvas.width / 9, this.canvas.height / 2.56)
    );
    this.shopImages.push(
      new coinForShop(this.canvas.width / 1.85, this.canvas.height / 2.56)
    );
    this.shopImages.push(
      new coinForShop(this.canvas.width / 2.35, this.canvas.height / 22)
    );
  }

  public drawUnlockableWorlds() {
    // Draw the moon
    this.newWorlds.push(
      new DesertPlanet(this.canvas.width / 4.3, this.canvas.height / 1.6)
    );

    // Draw mars
    this.newWorlds.push(
      new SwampPlanet(this.canvas.width / 2.33, this.canvas.height / 1.64)
    );

    // Draw venus
    this.newWorlds.push(
      new ArcticPlanet(this.canvas.width / 1.56, this.canvas.height / 1.64)
    );
  }

  public drawUnlockableCharacter() {
    // #TODO draw characters that are actually compatible for drawing, these are examples

    this.characters.push(
      new Yoshi(this.canvas.width / 7.9, this.canvas.height / 6)
    );

    this.characters.push(
      new YellowAmongUs(this.canvas.width / 2.9, this.canvas.height / 6)
    );

    this.characters.push(
      new GirlCharacter(this.canvas.width / 1.75, this.canvas.height / 6)
    );

    this.characters.push(
      new Sonic(this.canvas.width / 1.29, this.canvas.height / 6)
    );
  }

  private buttonMaker() {
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

  //test
  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent): void => {
    //console.log(`User clicked the: ${this.getButtonName()} button`);
    // console.log(`xPos ${event.clientX}, yPos ${event.clientY}`); //Check what pos is clicked on the screen.
    //mousehandler checkt of de cordinaten van XPos en Ypos + imageWith + ImageHeight gelijk zijn aan unlock button (plaatje)
    this.buttons.forEach((button) => {
      if (
        event.clientX >= button.getButtonXPos() &&
        event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
        event.clientY >= button.getButtonYPos() &&
        event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()
      ) {
        if (button.getButtonName() === "UnlockYoshi") {
          this.characters.push(
            new YoshiUnlocked(this.canvas.width / 7.9, this.canvas.height / 6)
          );
        }

        if (button.getButtonName() === "UnlockAmongUs") {
          this.characters.push(
            new YellowAmongUsUnlocked(this.canvas.width / 2.9, this.canvas.height / 6)
          );
        }

        if (button.getButtonName() === "UnlockGirlCharacter") {
          this.characters.push(
            new GirlCharacterUnlocked(this.canvas.width / 1.75, this.canvas.height / 6)
          )
        }

        if (button.getButtonName() === "UnlockSonic") {
          this.characters.push(
            new SonicUnlocked(this.canvas.width / 1.29, this.canvas.height / 6)
          )
        }

        if (button.getButtonName() === "UnlockSwamp") {
          this.characters.push(
            new SwampPlanetUnlocked(this.canvas.width / 2.33, this.canvas.height / 1.64)
          );
        }

        if (button.getButtonName() === "UnlockDesert") {
          this.characters.push(
            new DesertPlanetUnlocked(this.canvas.width / 4.3, this.canvas.height / 1.6)
          );
        }

        if (button.getButtonName() === "UnlockArctic") {
          this.characters.push(
            new ArcticPlanetUnlocked(this.canvas.width / 1.56, this.canvas.height / 1.646)
          );
        }

        
      }
    });
  };

  /**
   * Loads an image in such a way that the screen doesn't constantly flicker
   * @param {HTMLImageElement} source
   * @return HTMLImageElement - returns an image
   */
  public loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }
}
