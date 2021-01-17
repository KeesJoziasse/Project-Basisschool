class Shop {
  private canvas: HTMLCanvasElement;
  private image: HTMLImageElement;
  protected shopImages: Images[];
  protected buttons: Button[];
  private characters: Images[];
  private newWorlds: Images[];
  private name: string;
  private xPos: number;
  private yPos: number;

  //Constructor
  public constructor(canvas: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvas;

    // The button array
    this.buttons = [];

    // The scoring item array
    this.shopImages = [];

    // The unlockable player array
    this.characters = [];

    // The unlockable world array
    this.newWorlds = [];

    // Calls the character maker function
    this.drawUnlockableCharacter();

    // Calls the world maker function
    this.drawUnlockableWorlds();
  }

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

  public getButtonName(): string {
    return this.name;
  }

  /**
   * Draws all the necessary elements to the canvas
   */
  public draw() {
    const ctx = this.canvas.getContext("2d");

    //Clears the canvas every frame
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Draws the background
    ctx.drawImage(
      Utility.loadNewImage("./assets/img/background/EndscreenBackground.jpg"),
      0,
      0
    );

    // Calls the image drawer function
    this.drawImages();

    this.buttons.forEach((button) => {
      button.draw();
    });

    // Price of Yoshi
    Utility.writeTextToCanvas(
      ctx,
      "50",
      60,
      this.canvas.width / 5.8,
      this.canvas.height / 2.25,
      "center",
      "white"
    );

    // Price for yellow Among Us character
    Utility.writeTextToCanvas(
      ctx,
      "100",
      60,
      this.canvas.width / 2.49,
      this.canvas.height / 2.25,
      "center",
      "white"
    );

    // Price for Girl
    Utility.writeTextToCanvas(
      ctx,
      "150",
      60,
      this.canvas.width / 1.63,
      this.canvas.height / 2.25,
      "center",
      "white"
    );

    // Price for Sonic
    Utility.writeTextToCanvas(
      ctx,
      "200",
      60,
      this.canvas.width / 1.21,
      this.canvas.height / 2.25,
      "center",
      "white"
    );

    // Price for arctic level
    Utility.writeTextToCanvas(
      ctx,
      "300",
      60,
      this.canvas.width / 1.39,
      this.canvas.height / 1.1,
      "center",
      "white"
    );

    // Price for swamp level
    Utility.writeTextToCanvas(
      ctx,
      "200",
      60,
      this.canvas.width / 1.95,
      this.canvas.height / 1.1,
      "center",
      "white"
    );

    // Price for desert level
    Utility.writeTextToCanvas(
      ctx,
      "100",
      60,
      this.canvas.width / 3.4,
      this.canvas.height / 1.1,
      "center",
      "white"
    );

    // Drawing the images
    this.shopImages.forEach((shopImage) => {
      shopImage.move(this.canvas);
      shopImage.reloadImage(this.canvas);
      shopImage.draw(ctx);
    });

    //Drawing the characters
    this.characters.forEach((character) => {
      character.reloadImage(this.canvas);
      character.draw(ctx);
    });

    //Drawing the worlds
    this.newWorlds.forEach((world) => {
      world.reloadImage(this.canvas);
      world.draw(ctx);
    });
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
      new YoshiUnlockable(this.canvas.width / 7.9, this.canvas.height / 6)
    );

    this.characters.push(
      new YellowAmongUsUnlockable(
        this.canvas.width / 2.9,
        this.canvas.height / 6
      )
    );

    this.characters.push(
      new GirlCharacter(this.canvas.width / 1.75, this.canvas.height / 6)
    );

    this.characters.push(
      new SonicUnlockable(this.canvas.width / 1.29, this.canvas.height / 6)
    );
  }
}