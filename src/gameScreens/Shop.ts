class Shop {
  private canvas: HTMLCanvasElement;
  private image: HTMLImageElement;
  private images: Images[];
  private buttons: Button[];
  private characters: Images[];
  private newWorlds: Images[];
  public name: string;
  private money: number;


  //Constructor
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // The button array
    this.buttons = [];

    // The scoring item array
    this.images = [];

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

    this.getButtonName();

    // Amount of money
    this.money = 1000;

    //Calls the loop.
    this.loop();

    // add an mouse event
    document.addEventListener("click", this.mouseHandler);
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
    //#TODO #FIX zodra die unluck button gepressed wordt
    //#TODO #FIX probleem hij ziet de shop niet!!
    // this.drawUnlockableCharacter();
    // this.drawUnlockableWorlds();
    this.buttons.forEach((button) => {
      button.draw(ctx);
    });

    //The text at the top center.
    Start.writeTextToCanvas(
      ctx,
      "Shop",
      60,
      this.canvas.width / 2,
      80,
      "center"

      
    );

    // Amount of money in the player's bank
    Start.writeTextToCanvas(
      ctx,
      "200",
      60,
      this.canvas.width / 11,
      this.canvas.height / 1.035,
      "center");

      // Price of Stewie
      Start.writeTextToCanvas(
        ctx,
        "50",
        60,
        this.canvas.width / 5.8,
        this.canvas.height / 2.25,
        "center");

        // Price for yellow Among Us character
        Start.writeTextToCanvas(
          ctx,
          "50",
          60,
          this.canvas.width / 2.55,
          this.canvas.height / 2.25,
          "center");

          // Price for Ash
          Start.writeTextToCanvas(
            ctx,
            "50",
            60,
            this.canvas.width / 1.68,
            this.canvas.height / 2.25,
            "center");

            // Price for Morty
            Start.writeTextToCanvas(
              ctx,
              "50",
              60,
              this.canvas.width / 1.24,
              this.canvas.height / 2.25,
              "center");

              // Price for desert level
              Start.writeTextToCanvas(
                ctx,
                "100",
                60,
                this.canvas.width / 1.42,
                this.canvas.height / 1.10,
                "center");

                Start.writeTextToCanvas(
                  ctx,
                  "100",
                  60,
                  this.canvas.width / 2.01,
                  this.canvas.height / 1.10,
                  "center");

                  Start.writeTextToCanvas(
                    ctx,
                    "100",
                    60,
                    this.canvas.width / 3.4,
                    this.canvas.height / 1.10,
                    "center");

    // Drawing the images
    this.images.forEach((image) => {
      image.move(this.canvas);
      image.reloadImage(this.canvas);
      image.draw(ctx);
    })

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
    })
  }

  public drawImages() {
    // Draw coins
    // #TODO fix code duplication
    this.images.push(new coinForShop(this.canvas.width / 2.3, this.canvas.height / 1.17));
    this.images.push(new coinForShop(this.canvas.width / 4.4, this.canvas.height / 1.17));
    this.images.push(new coinForShop(this.canvas.width / 1.56, this.canvas.height / 1.17));
    this.images.push(new coinForShop(this.canvas.width / 3, this.canvas.height / 2.56));
    this.images.push(new coinForShop(this.canvas.width / 1.33, this.canvas.height / 2.56));
    this.images.push(new coinForShop(this.canvas.width / 9, this.canvas.height / 2.56));
    this.images.push(new coinForShop(this.canvas.width / 1.85, this.canvas.height / 2.56));
    this.images.push(new coinForShop(this.canvas.width / 50, this.canvas.height / 1.1));


  }

  public drawUnlockableWorlds() {
    // Draw the moon
    this.newWorlds.push(
      new DesertPlanet(this.canvas.width / 4.3, this.canvas.height / 1.6)
    )

    // Draw mars
    this.newWorlds.push(
      new SwampPlanet(this.canvas.width / 2.33, this.canvas.height / 1.64)
    )

    // Draw venus
    this.newWorlds.push(
      new ArcticPlanet(this.canvas.width / 1.56, this.canvas.height / 1.64)
    )
  }

  public drawUnlockableCharacter() {
    // #TODO draw characters that are actually compatible for drawing, these are examples
    this.characters.push(
      new Stewie(this.canvas.width / 7.5, this.canvas.height / 6)
    );

    this.characters.push(
      new YellowAmongUs(this.canvas.width / 2.9, this.canvas.height / 6)
    );

    this.characters.push(
      new Ash(this.canvas.width / 1.7, this.canvas.height / 6)
    );

    this.characters.push(
      new Morty(this.canvas.width / 1.25, this.canvas.height / 6)
    )
  }

  private buttonMaker() {
    this.buttons.push(
      new BackToStart(
        (this.canvas.width / 5) * 0.05,
        (this.canvas.height / 5) * 0.09
      )
    );



    //QandA Button
    this.buttons.push(new QuestionsAnswersButton(this.canvas.width / 1.07, this.canvas.height / 70));

    //Settings Button
    this.buttons.push(new SettingsButton(this.canvas.width / 1.07, this.canvas.height / 8.5));

    // // Left button
    // this.buttons.push(new PreviousSelector(this.canvas.width - 1680, 740)); ##TODO ADD if you want more characters/worlds

    // // Right button
    // this.buttons.push(new NextSelector(this.canvas.width - 380, 740, 1)); ##TODO ADD if you want more characters/worlds

    // Unlock buttons for the worlds
    this.buttons.push(new UnlockDesert(this.canvas.width / 4.5, this.canvas.height / 1.08));
    this.buttons.push(new UnlockArctic(this.canvas.width / 1.56, this.canvas.height / 1.08));
    this.buttons.push(new UnlockSwamp(this.canvas.width / 2.31, this.canvas.height / 1.08));

    /// Unlock buttons for the characters
    // #TODO fix code duplication
    this.buttons.push(new UnlockStewie(this.canvas.width / 9, this.canvas.height / 2.15));
    this.buttons.push(new UnlockAmongUs(this.canvas.width / 3.1, this.canvas.height / 2.15));
    this.buttons.push(new UnlockAsh(this.canvas.width / 1.87, this.canvas.height / 2.15));
    this.buttons.push(new UnlockMorty(this.canvas.width / 1.34, this.canvas.height / 2.15));
  }



  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent) => { };

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
