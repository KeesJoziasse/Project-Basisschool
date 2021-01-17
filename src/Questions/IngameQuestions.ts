class InGameQuestions {
  private canvas: HTMLCanvasElement;
  private imageQuestion: Images;
  private buttons: Button[];
  private questionBackground: Images;
  // private name: string;
  // private xPos: number;
  // private yPos: number;
  private image: HTMLImageElement;

  // public getButtonXPos(): number {
  //   return this.xPos;
  // }

  // public getButtonYPos(): number {
  //   return this.yPos;
  // }

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

    //The button array
    this.buttons = [];

    //Question background
    this.questionBackground = new InGameQuestionImage(
      this.canvas.width / 3,
      150
    );

    //Calling the button maker method.
    // this.buttonMaker(); //TODO

    // gives a random question
    this.randomQuestionGenerator();

    this.draw();

    // this.loop();
  }

  // public getButtonName(): string {
  //   return this.name;
  // }

  // /**
  //  * Method for the Game Loop
  //  */
  // public loop = () => {
  //   // console.log(this.score);
  //   // console.log(this.ingameQuestion.getAnswer()); //TODO deze werkt wel
  //   this.draw();

  //   // in the first loop no images are loaded
  //   requestAnimationFrame(this.loop);
  // };


    
  

  /**
   * Draws all the necessary elements to the canvas
   */
  public draw() {
    const ctx = this.canvas.getContext("2d");

    //Clears the canvas every frame
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.questionBackground.draw(ctx);
    // Draws all the images
    this.imageQuestion.draw(ctx);
    this.imageQuestion.getImageImage();

    // //Drawing the buttons
    // this.buttons.forEach((button) => {
    //   button.draw();
    // });
  }
  //
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

  private buttonMaker() {
    //Initializing the buttons and pushing them to the array
    //Making the right arrow for level selector
    // this.buttons.push(
    //   new YesButton(
    //     (this.canvas.width / 3) * 1.05,
    //     (this.canvas.height / 2) * 1.5,
    //     this.canvas
    //   )
    // );

    // this.buttons.push(
    //   new NoButton(
    //     (this.canvas.width / 2) * 1.05,
    //     (this.canvas.height / 2) * 1.5,
    //     this.canvas
    //   )
    // );
  }

  //Creates the Questions

  public randomQuestionGenerator(): void {
    const random = GameItem.randomInteger(1, 6);
    if (random === 1) {
      console.log("Random was 1 push question 1");
      this.imageQuestion = new Question1(
        (this.canvas.width / 3) * 1.2,
        this.canvas.height / 2.5
      );
    }
    if (random === 2) {
      console.log("Random was 2 push question 2");
      this.imageQuestion = new Question2(
        (this.canvas.width / 3) * 1.2,
        this.canvas.height / 2.5
      );
    }
    if (random === 3) {
      console.log("Random was 3 push question 3");
      this.imageQuestion = new Question3(
        (this.canvas.width / 3) * 1.2,
        this.canvas.height / 2.5
      );
    }
    if (random === 4) {
      console.log("Random was 4 push question 4");
      this.imageQuestion = new Question4(
        (this.canvas.width / 3) * 1.2,
        this.canvas.height / 2.5
      );
    }
    if (random === 5) {
      console.log("Random was 5 push question 5");
      this.imageQuestion = new Question5(
        (this.canvas.width / 3) * 1.2,
        this.canvas.height / 2.5
      );
    }
    if (random === 6) {
      console.log("Random was 6 push question 6");
      this.imageQuestion = new Question6(
        (this.canvas.width / 3) * 1.2,
        this.canvas.height / 2.5
      );
    }
  }
}
