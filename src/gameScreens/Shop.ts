class Shop {
  private canvas: HTMLCanvasElement;
  private image: HTMLImageElement;
  private images: Images[];
  private buttons: Button[];
  private characters: Images[];
  private newWorlds: Images[];

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

    

    //Calls the loop.
    this.loop();

    // add an mouse event
    document.addEventListener("click", this.mouseHandler);
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

    this.drawUnlockableCharacter();

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

    // Drawing the images
    this.images.forEach((image)=> {
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

  public drawImages(){
    // Draw coins
    // #TODO fix code duplication
    this.images.push(new coinForShop(this.canvas.width / 2 - 120, this.canvas.height / 3 + 560));
    this.images.push(new coinForShop(this.canvas.width / 2 - 520, this.canvas.height / 3 + 560));
    this.images.push(new coinForShop(this.canvas.width / 2 + 270, this.canvas.height / 3 + 560));
    this.images.push(new coinForShop(this.canvas.width / 2 - 330, this.canvas.height / 3 + 60));
    this.images.push(new coinForShop(this.canvas.width / 2 + 480, this.canvas.height / 3 + 60));
    this.images.push(new coinForShop(this.canvas.width / 2 - 750, this.canvas.height / 3 + 60));
    this.images.push(new coinForShop(this.canvas.width / 2 + 80, this.canvas.height / 3 + 60));

    
  }

  public drawUnlockableWorlds(){
    // Draw the moon
    this.newWorlds.push(
      new Moon(this.canvas.width / 2 - 500, this.canvas.height / 3 + 300)
    )

    // Draw mars
    this.newWorlds.push(
      new Mars(this.canvas.width /2 - 100, this.canvas.height / 3 + 300)
    )

    // Draw venus
    this.newWorlds.push(
      new Venus(this.canvas.width /2 + 300, this.canvas.height / 3 + 300)
    )
  }

  public drawUnlockableCharacter(){
    // #TODO draw characters that are actually compatible for drawing, these are examples

    this.characters.push(
      new Sonic(this.canvas.width / 2 - 700, this.canvas.height / 3 - 210)
    )

    this.characters.push(
      new Unlockable(this.canvas.width / 2 - 300, this.canvas.height / 3 - 190)
    );

    

    this.characters.push(
      new Ash(this.canvas.width / 2 + 160, this.canvas.height / 3 - 190)
    );

    this.characters.push(
      new Morty(this.canvas.width / 2 + 580, this.canvas.height / 3 - 190)
    )

    // Draw coins 


    

  
  }

  private buttonMaker() {
    this.buttons.push(
      new BackToStart(
        (this.canvas.width / 5) * 0.05,
        (this.canvas.height / 5) * 0.09
      )
    );

    

    //QandA Button
    this.buttons.push(new QuestionsAnswersButton(this.canvas.width - 124, 0));

    //Settings Button
    this.buttons.push(new SettingsButton(this.canvas.width - 124, 124));

    // // Left button
    // this.buttons.push(new PreviousSelector(this.canvas.width - 1680, 740)); ##TODO ADD if you want more characters/worlds

    // // Right button
    // this.buttons.push(new NextSelector(this.canvas.width - 380, 740, 1)); ##TODO ADD if you want more characters/worlds

    // Unlock buttons for the worlds
    this.buttons.push(new Unlock(this.canvas.width - 1500, 1000, 1));
    this.buttons.push(new Unlock(this.canvas.width - 700, 1000, 1));
    this.buttons.push(new Unlock(this.canvas.width - 1100, 1000, 1));

    /// Unlock buttons for the characters
    // #TODO fix code duplication
    this.buttons.push(new Unlock(this.canvas.width - 1710, 500, 1));
    this.buttons.push(new Unlock(this.canvas.width - 1300, 500, 1));
    this.buttons.push(new Unlock(this.canvas.width - 890, 500, 1));
    this.buttons.push(new Unlock(this.canvas.width - 480, 500, 1));
    
  }

  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent) => {};

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
