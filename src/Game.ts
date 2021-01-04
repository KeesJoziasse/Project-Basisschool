/**
 * Class Game: Responsible for the gameloop and will activate the class: GameItem, Player, ScoringItem
 */
class Game {
    private canvas: HTMLCanvasElement;
    private player: Player;
    // #TODO screen: Screen[];
    private gameItems: GameItem[];
    private score: number;
    private worldName: string;
    private frame: number;
    private test: Start;

    /**
     * Constructor
     * @param canvasId HTML canvas where the game will be displayed on
     */
    public constructor(canvasId: HTMLCanvasElement){
        //Canvas + height + width
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.gameItems = [];
        this.player = new Player(this.canvas);

        // #TODO zorg dat gameitems worden ingeladen
        
        this.score = 0;
        this.frame = 0;
        this.worldName;

        this.loop();
    }

    /**
     * Method that checks the gamestate
     */
    public loop = () => {
        
        this.frame++;
        //console.log(this.frame);
        this.draw()

        //player is able to move
        this.player.move();

        // #TODO hiervan aparte methode maken: checkGameState()
        // checks if the selected worldname is Ocean
        if (this.worldName === "Ocean"){            
            // #TODO draw gameitems
            // #TODO add randomly gameItems to the game and draw them
            // #TODO make the gameItems move horizontal to the left
            // #TODO create a background
            
        } 


        requestAnimationFrame(this.loop);
    }

    /**
     * Method that writes gameItems on the canvas
     */
    public draw(){
        const ctx = this.canvas.getContext("2d");
        
        //clears the canvas
        ctx.clearRect(0,0,this.canvas.width,this.canvas.height)

        //test text write Danger Dash
        Start.writeTextToCanvas(
            ctx,
            "Run!",
            60,
            this.canvas.width / 2,
            80,
            "center"
        );

        this.player.draw(ctx);
    }

}