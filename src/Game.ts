class Game{
    
    canvas: HTMLCanvasElement;

    public constructor(canvas: HTMLElement){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}