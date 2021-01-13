abstract class Question {
  private canvas: HTMLCanvasElement;
  protected image: HTMLImageElement;
  protected answer: string;
  protected name: string;


  //Constructor
  public constructor(canvas: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvas;

    //sub classes info
    this.image = this.image;
    this.answer = this.answer;
    this.name = this.name;
  }


  // getter 

  // public getImage():HTMLImageElement{
  //   return this.image;
  // }
  
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
 /**
     * Generates a random integer number between min and max
     *
     * @param {number} min - minimal time
     * @param {number} max - maximal time
     */
    public static randomInteger(min: number, max: number): number {
      return Math.round(Math.random() * (max - min) + min);
  }
 
}
