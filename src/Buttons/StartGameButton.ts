/// <reference path="Button.ts" />

class StartGameButton extends Button {
// image (zodat deze button zelf verantwoordelijk is voor zijn eigen image).
  // private image: HTMLImageElement

  public constructor(name: string, xPos: number, yPos: number, image: string, canvasId: HTMLCanvasElement) {
    super(name, xPos, yPos, image, canvasId );

    // #TODO loadNewImage verplaatsen naar Screen
    // #TODO source path afmaken + images toevoegen in aparte map in img
    //this.image = Start.loadNewImage("./assets/img/buttons/");
  }

  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
   
  
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }
}
