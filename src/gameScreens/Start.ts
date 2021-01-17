class Start {
  //Attributes
  private canvas: HTMLCanvasElement;
  //private buttons: Button[];
  private worldImages: Images[];
  private characterImages: Images[];
  private startImages: Images[];
  private background: Images[];
  private indexCounterWorld: number;
  private indexCounterCharacter: number;
  private characterName:string;

  //Test
  private testPlayer: Player;
  private testButton: Button;
  //Constructor
  public constructor(canvas: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.characterName = "";

    //The button array
    //this.buttons = [];

    //The world images array
    this.worldImages = [];

    //The world images array
    this.characterImages = [];

    //The overall image array
    this.startImages = [];

    //Background cloud array
    this.background = [];

    //Index counter for world
    this.indexCounterWorld = 0;

    //Index counter for charachter
    this.indexCounterCharacter = 0;

    //Calling the button maker method.
    //this.buttonMaker();

    //Calling the IMG maker method
    this.worldImageMaker();

    //Calling the character maker method.
    this.charachterMaker();

    //Calling the image maker method
    this.imageMaker();

    //Background loop
    this.backgroundLoop();

    //The clickhandler
    // document.addEventListener("click", this.mouseHandler);
  }

  public getTest(): void {
    return console.log(this.testPlayer);
  }

  /**
   * Draws all the necessary elements to the canvas
   */
  public draw() {
    const ctx = this.canvas.getContext("2d");

    //Clears the canvas every frame
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.background.forEach((backgroundImage) => {
      backgroundImage.draw(ctx);
      backgroundImage.move(this.canvas);
      backgroundImage.reloadImage(this.canvas);
    });

    //Draws all the images
    this.startImages.forEach((startImage) => {
      startImage.draw(ctx);
    });

    //Overwritten by DangerDash.ts
    // //Draws all the buttons
    // this.buttons.forEach((button) => {
    //   button.draw(ctx);
    // });

    //Drawing the characters
    for (let i = 0; i < this.characterImages.length; i++) {
      this.characterImages[this.indexCounterCharacter].draw(ctx);
    }

    //Forloop to decide what world img is goint to be drawed
    for (let i = 0; i < this.worldImages.length; i++) {
      this.worldImages[this.indexCounterWorld].draw(ctx);
    }
  }

  private worldImageMaker() {
    this.worldImages.push(
      new OceanImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 130)
    );
  }
  
  public pushDesert(){
    this.worldImages.push(
      new DesertImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 80)
    );
  }

  public pushSwamp(){
    this.worldImages.push(
      new SwampImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 90)
    );
  }

  public pushArtic(){
    this.worldImages.push(
      new ArticImage(this.canvas.width / 2 - 250, this.canvas.height / 3 - 150)
    );
  }

  private charachterMaker() {
    //TODO alleen dingen pushen die echt in de game komen
    //TODO hier dingen pushen zodra unlock button is gedrukt
    this.characterImages.push(
      new AmongUsChar(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120)
    );
  }

  public pushYoshi(){
    this.characterImages.push(
    new YoshiUnlocked(
      this.canvas.width / 2 - 90,
      this.canvas.height / 2 - 120)
    );
  }
  
  public pushYellowAmongUs(){
    this.characterImages.push(
      new YellowAmongUsUnlocked(
        this.canvas.width / 2 - 90,
        this.canvas.height / 2 - 120
      )
    );
  }

  public pushGirl(){
    this.characterImages.push(
      new GirlCharacterUnlocked(
        this.canvas.width / 2 - 90,
        this.canvas.height / 2 - 120
      )
    );
  }

  public pushSonic(){
    this.characterImages.push(
      new SonicUnlocked(
        this.canvas.width / 2 - 90,
        this.canvas.height / 2 - 120
      )
    );
  }

  private imageMaker() {
    this.startImages.push(new Titel(this.canvas.width / 4, -40));
  }

  private backgroundLoop() {
    this.background.push(new Cloud(0, this.canvas.height / 4, 0.5));
  }

  /**
   * Method to select the world you want to play.
   * @param button
   */
  public worldSelector(button: Button) {
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

  public characterSelector(button: Button) {
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

  public startLevel(button: Button) {
    this.CharacterName();
    if (
      button.getButtonName() == "StartGame" &&
      this.worldImages[this.indexCounterWorld].getImageName() == "Ocean"
    ) {
      new OceanWorld(this.canvas,`${this.characterName}`);
    } else if (
      button.getButtonName() == "StartGame" &&
      this.worldImages[this.indexCounterWorld].getImageName() == "Artic"
    ) {
      new ArticWorld(this.canvas,`${this.characterName}`);
    } else if (
      button.getButtonName() == "StartGame" &&
      this.worldImages[this.indexCounterWorld].getImageName() == "Desert"
    ) {
      new DesertWorld(this.canvas,`${this.characterName}`);
    } else if (
      button.getButtonName() == "StartGame" &&
      this.worldImages[this.indexCounterWorld].getImageName() == "Swamp"
    ) {
      new SwampWorld(this.canvas,`${this.characterName}`);
    }
  }

  public checkCharacterName(button: Button) {
    if (
      button.getButtonName() == "StartGame" &&
      this.characterImages[this.indexCounterCharacter].getImageName() ===
        "AmongUsLime"
    ) {
      new AmongUs(this.canvas);
    } else if (
      button.getButtonName() == "StartGame" &&
      this.characterImages[this.indexCounterCharacter].getImageName() ===
        "YoshiUnlocked"
    ) {
      new Yoshi(this.canvas);
    } else if (
      button.getButtonName() == "StartGame" &&
      this.characterImages[this.indexCounterCharacter].getImageName() ===
        "UnlockYellowAmongUs"
    ) {
      new YellowAmongUs(this.canvas);
    } else if (
      button.getButtonName() == "StartGame" &&
      this.characterImages[this.indexCounterCharacter].getImageName() ===
        "GirlCharacterUnlocked"
    ) {
      new Girl(this.canvas);
    } else if (
      button.getButtonName() == "StartGame" &&
      this.characterImages[this.indexCounterCharacter].getImageName() ==
        "SonicUnlocked"
    ) {
      new Sonic(this.canvas);
    } 
  }

  public CharacterName() {
    if (
      this.characterImages[this.indexCounterCharacter].getImageName() ===
        "AmongUsLime"
    ) {
      this.characterName = "AmongUsLime";
    } else if (
      this.characterImages[this.indexCounterCharacter].getImageName() ===
        "YoshiUnlocked"
    ) {
      this.characterName = "Yoshi";
    } else if (
      this.characterImages[this.indexCounterCharacter].getImageName() ===
        "UnlockYellowAmongUs"
    ) {
      this.characterName = "YellowAmongUs";
    } else if (
      this.characterImages[this.indexCounterCharacter].getImageName() ===
        "GirlCharacterUnlocked"
    ) {
      this.characterName = "Girl";
    } else if (
      this.characterImages[this.indexCounterCharacter].getImageName() ==
        "SonicUnlocked"
    ) {
      this.characterName = "Sonic";
    } 
  }
}
