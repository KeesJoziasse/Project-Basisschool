/// <reference path = "GameItem.ts"/> 

class Player extends GameItem {

    private keyboardListener: KeyboardListener;
    private image: HTMLImageElement;
    private yPos: number;

    constructor(canvas:HTMLCanvasElement){
        super(canvas);
        this.name = "Player";
        // #TODO check if image path is correct
        this.image = GameItem.loadNewImage("../assets/img/Characters/amongus.png");
        this.keyboardListener = new KeyboardListener;
        this.yPos = this.canvas.height / 2;
    }

    /**
     * method to move the player between the lanes 
     * #TODO move functie wordt nog niet aangeroepen
     */
    public move(){
        // #TODO bepaal welke keys je moet gebruiken in de game
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_W) && this.yPos !== this.topLane){
            this.yPos = this.topLane;
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_X) && this.yPos !== this.middleLane){
            this.yPos = this.middleLane;
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_S) && this.yPos !== this.lowerLane){
            this.yPos = this.lowerLane;
        }
    }

    /**
     * method to draw the player on the canvas
     * #TODO draw functie wordt nog niet aangeroepen
     */
    public draw(ctx: CanvasRenderingContext2D){
        ctx.drawImage(
            this.image,
            this.yPos - this.image.height / 2,
            this.canvas.width - 150
        )
    }

    /**
     * Method that checks if a gameItem collides with the player 
     * @param GameItem 
     */
    public collidesWithGameItem(GameItem:GameItem[]){

    }
}