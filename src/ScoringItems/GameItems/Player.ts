/// <reference path = "GameItem.ts"/> 

class Player extends GameItem {

    private keyboardListener: KeyboardListener;
    private image: HTMLImageElement;
    private yPos: number;
    private xPos: number;
    private animationFrame: number;

    constructor(canvas:HTMLCanvasElement){
        super(canvas);
        this.name = "Player";
        this.image = GameItem.loadNewImage("./assets/img/Characters/Amongus/among-us-walk-1.png");
        this.keyboardListener = new KeyboardListener;
        this.yPos = this.canvas.height / 2;
        this.xPos = this.canvas.width / 3;
        this.animationFrame = 0;
    }

    /**
     * method to move the player between the lanes 
     */
    public move(){
        
        // #TODO bepaal welke keys je moet gebruiken in de game
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_W) && this.yPos !== this.topLane){
            this.yPos = this.topLane;
            console.log("W is pressed");
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_X) && this.yPos !== this.middleLane){
            this.yPos = this.middleLane;
            console.log("X is pressed");
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_S) && this.yPos !== this.lowerLane){
            this.yPos = this.lowerLane;
            console.log("S is pressed");
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        
        // #TODO 5 images reverse 2 gebruiken en met 100 frames werken per 20 image change

        //Animationframe goes to 1 if its 76
        this.animationFrame++;
        if(this.animationFrame >= 60 ){            
            this.animationFrame -= 59;
        }

        //animated so the images will change at a certain amount of frames
        if(this.animationFrame <= 15){
            ctx.drawImage(GameItem.loadNewImage("./assets/img/Characters/Amongus/among-us-walk-1.png"), this.xPos, this.yPos);
        } else if (this.animationFrame >= 15 && this.animationFrame <= 30) {
            ctx.drawImage(GameItem.loadNewImage("./assets/img/Characters/Amongus/among-us-walk-2.png"), this.xPos, this.yPos);
        } else if (this.animationFrame >= 30 && this.animationFrame <= 45){
            ctx.drawImage(GameItem.loadNewImage("./assets/img/Characters/Amongus/among-us-walk-3.png"), this.xPos, this.yPos);
        } else if (this.animationFrame >= 45 && this.animationFrame <= 60){
            ctx.drawImage(GameItem.loadNewImage("./assets/img/Characters/Amongus/among-us-walk-2.png"), this.xPos, this.yPos);
        } 

    }

    /**
     * Method that checks if a gameItem collides with the player 
     * #TODO wordt nog niet aangesproken
     * @param GameItem 
     */
    public collidesWithGameItem(GameItem:GameItem[]){

    }
}