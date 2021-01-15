class DangerDash {
  //#TODO make abstract class GameScreen or Screens
  private canvas: HTMLCanvasElement;
  private earnedCoins: number;
  private DangerDashFrame: number;

  private start: Start;
  private shop: Shop;

  private screenName: string;

  public constructor(canvas: HTMLCanvasElement) {
    //canvas
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.earnedCoins = 0;
    this.screenName = "Start";

    this.start = new Start(canvas);

    this.DangerDashFrame = 0;

    //Calling the loop
    this.loop();
  }

  //Gets the screenName
  public getScreenName(): string {
    return this.screenName;
  }

  /**
   * Method that checks the gamestate
   */
  public loop = () => {
    this.DangerDashFrame++;
    console.log(this.DangerDashFrame);
    if (this.screenName === "Start") {
      this.start.draw();
    }
    if (this.screenName === "Shop"){
      this.shop.draw();
    }
    
    console.log(this.screenName);
    requestAnimationFrame(this.loop);
  };


}
