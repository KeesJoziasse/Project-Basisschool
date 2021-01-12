abstract class Question {
  private canvas: HTMLCanvasElement;
  protected text: HTMLImageElement;
  protected answer: string;
  protected name: string;

  //Constructor
  public constructor(canvas: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvas;

    //sub classes info
    this.text = this.text;
    this.answer = this.answer;
    this.name = this.name;
  }

  // getter 

  public getText():HTMLImageElement{
    return this.text;
  }

  public mathRandom(): void {}
  
  //
  /**
   * Loads an image so it doesn't flicker
   * @param {HTMLImageElement} source
   * @return HTMLImageElement - returns an image
   */
  public loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

 
}
