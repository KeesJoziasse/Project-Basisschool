console.log("The game is working");
let init = () => {
    new HighScore(document.getElementById("canvas"));
};
window.addEventListener("load", init);
class Button {
    constructor(name, xPos, yPos, image) {
        this.name = name;
        this.xPos = xPos;
        this.yPos = yPos;
        this.image = this.loadNewImage(image);
    }
    getName() {
        return this.name;
    }
    getXPos() {
        return this.xPos;
    }
    getYPos() {
        return this.yPos;
    }
    getImage() {
        return this.image;
    }
    getImageWidth() {
        return this.image.width;
    }
    getImageHeight() {
        return this.image.height;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
class GameItem {
}
class ScoringItem extends GameItem {
}
class Coin extends ScoringItem {
}
class HighScore {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.image = Start.loadNewImage("./assets/img/start-button.png");
        this.loop();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        HighScore.writeTextToCanvas(ctx, "Highscores", 65, this.canvas.width / 2, 80, "center");
        HighScore.writeTextToCanvas(ctx, "First:", 40, this.canvas.width / 3, 200, "center");
        HighScore.writeTextToCanvas(ctx, "Second:", 40, (this.canvas.width / 3) * 0.96, 260, "center");
        HighScore.writeTextToCanvas(ctx, "Thrid:", 40, (this.canvas.width / 3) * 0.99, 320, "center");
        HighScore.writeTextToCanvas(ctx, "Fourth:", 40, (this.canvas.width / 3) * 0.97, 380, "center");
        HighScore.writeTextToCanvas(ctx, "Fifth:", 40, this.canvas.width / 3, 440, "center");
        ctx.drawImage(Start.loadNewImage("./assets/img/start-button.png"), ((this.canvas.width / 5) * 0, 7), ((this.canvas.height / 5) * 0, 7));
    }
    static writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "black") {
        ctx.font = `${fontSize}px Minecraft`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
class InGame {
}
class KeyboardListener {
    constructor() {
        this.keyCodeStates = new Array();
        this.keyCodeTyped = new Array();
        this.previousState = new Array();
        window.addEventListener("keydown", (ev) => {
            this.keyCodeStates[ev.keyCode] = true;
        });
        window.addEventListener("keyup", (ev) => {
            this.keyCodeStates[ev.keyCode] = false;
        });
    }
    onFrameStart() {
        this.keyCodeTyped = new Array();
        this.keyCodeStates.forEach((val, key) => {
            if (this.previousState[key] != val && !this.keyCodeStates[key]) {
                this.keyCodeTyped[key] = true;
                this.previousState[key] = val;
            }
        });
    }
    isKeyDown(keyCode) {
        return this.keyCodeStates[keyCode] == true;
    }
    isKeyTyped(keyCode) {
        return this.keyCodeTyped[keyCode] == true;
    }
}
KeyboardListener.KEY_ENTER = 13;
KeyboardListener.KEY_SHIFT = 16;
KeyboardListener.KEY_CTRL = 17;
KeyboardListener.KEY_ALT = 18;
KeyboardListener.KEY_ESC = 27;
KeyboardListener.KEY_SPACE = 32;
KeyboardListener.KEY_LEFT = 37;
KeyboardListener.KEY_UP = 38;
KeyboardListener.KEY_RIGHT = 39;
KeyboardListener.KEY_DOWN = 40;
KeyboardListener.KEY_DEL = 46;
KeyboardListener.KEY_1 = 49;
KeyboardListener.KEY_2 = 50;
KeyboardListener.KEY_3 = 51;
KeyboardListener.KEY_4 = 52;
KeyboardListener.KEY_5 = 53;
KeyboardListener.KEY_6 = 54;
KeyboardListener.KEY_7 = 55;
KeyboardListener.KEY_8 = 56;
KeyboardListener.KEY_9 = 57;
KeyboardListener.KEY_0 = 58;
KeyboardListener.KEY_A = 65;
KeyboardListener.KEY_B = 66;
KeyboardListener.KEY_C = 67;
KeyboardListener.KEY_D = 68;
KeyboardListener.KEY_E = 69;
KeyboardListener.KEY_F = 70;
KeyboardListener.KEY_G = 71;
KeyboardListener.KEY_H = 72;
KeyboardListener.KEY_I = 73;
KeyboardListener.KEY_J = 74;
KeyboardListener.KEY_K = 75;
KeyboardListener.KEY_L = 76;
KeyboardListener.KEY_M = 77;
KeyboardListener.KEY_N = 78;
KeyboardListener.KEY_O = 79;
KeyboardListener.KEY_P = 80;
KeyboardListener.KEY_Q = 81;
KeyboardListener.KEY_R = 82;
KeyboardListener.KEY_S = 83;
KeyboardListener.KEY_T = 84;
KeyboardListener.KEY_U = 85;
KeyboardListener.KEY_V = 86;
KeyboardListener.KEY_W = 87;
KeyboardListener.KEY_X = 88;
KeyboardListener.KEY_Y = 89;
KeyboardListener.KEY_Z = 90;
class Obstacle extends ScoringItem {
}
class Player extends GameItem {
}
class PowerUp extends ScoringItem {
}
class Question extends ScoringItem {
}
class Start {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            this.wallet++;
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.wallet = 0;
        this.image = Start.loadNewImage("./assets/img/amongus.png");
        this.loop();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        Start.writeTextToCanvas(ctx, "Top center text", 60, this.canvas.width / 2, 80, "center");
        Start.writeTextToCanvas(ctx, `${this.wallet}`, 40, 60, 80);
        ctx.drawImage(Start.loadNewImage("./assets/img/start-button.png"), (this.canvas.width / 2) - 180, (this.canvas.height / 5) * 4);
    }
    static writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "red") {
        ctx.font = `${fontSize}px Minecraft`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
//# sourceMappingURL=app.js.map