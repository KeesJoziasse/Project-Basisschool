console.log("The game is working");
let init = () => {
    new DangerDash(document.getElementById("canvas"));
};
window.addEventListener("load", init);
class DangerDash {
    constructor(canvas) {
        this.loop = () => {
            this.DangerDashFrame++;
            if (this.screenName === "StartScreen") {
                if (this.DangerDashFrame === 1) {
                    this.buttonMakerStartScreen();
                }
                this.start.draw();
                this.buttons.forEach((button) => {
                    button.draw();
                });
            }
            if (this.screenName === "GameScreen") {
                console.log("GameScreen");
                if (this.DangerDashFrame === 1000) {
                    this.screenName = "Question";
                    this.DangerDashFrame = 0;
                }
            }
            if (this.screenName === "Question") {
                if (this.DangerDashFrame = 1) {
                    new InGameQuestionImage(this.canvas.width / 3, 150);
                }
                this.inGameQuestions.draw();
            }
            if (this.screenName === "Endscreen") {
                console.log("been here");
                new Endscreen(this.canvas, 99999999);
            }
            if (this.screenName === "ShopScreen") {
                this.DrawShop();
            }
            if (this.screenName === "HighScoreScreen") {
                if (this.DangerDashFrame === 1) {
                    this.buttonMakerGeneralQuestions();
                }
                this.highScore.draw();
            }
            if (this.screenName === "Q&AScreen") {
                if (this.DangerDashFrame === 1) {
                    this.buttonMakerGeneralQuestions();
                }
                this.generalQuestions.draw();
            }
            requestAnimationFrame(this.loop);
        };
        this.mouseHandlerStart = (event) => {
            this.buttons.forEach((button) => {
                if (event.clientX >= button.getButtonXPos() &&
                    event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
                    event.clientY >= button.getButtonYPos() &&
                    event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()) {
                    if (this.screenName === "StartScreen") {
                        this.startScreenDetection(button);
                    }
                    else if (this.screenName === "HighScoreScreen") {
                        this.HighScoreScreenDetection(button);
                    }
                    else if (this.screenName === "Q&AScreen") {
                        this.QAndAScreenDetection(button);
                    }
                }
                else {
                    return null;
                }
            });
            this.shopButtons.forEach((button) => {
                if (event.clientX >= button.getButtonXPos() &&
                    event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
                    event.clientY >= button.getButtonYPos() &&
                    event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()) {
                    if (this.screenName === "ShopScreen") {
                        this.ShopScreenDetection(button);
                    }
                }
            });
        };
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.earnedCoins = 450;
        this.screenName = "StartScreen";
        this.start = new Start(this.canvas);
        this.shop = new Shop(this.canvas);
        this.highScore = new HighScore(this.canvas);
        this.generalQuestions = new GeneralQuestions(this.canvas);
        this.inGameQuestions = new InGameQuestions(this.canvas);
        this.DangerDashFrame = 0;
        this.shopButtons = [];
        this.buttonMakerShopScreen();
        this.buttons = [];
        this.images = [];
        document.addEventListener("click", this.mouseHandlerStart);
        this.loop();
    }
    setscreenName(ScreenName) {
        this.screenName = ScreenName;
        console.log(this.screenName);
        if (this.screenName === "Endscreen") {
            this.screenName = "ShopScreen";
        }
        console.log(this.screenName);
    }
    DrawShop() {
        this.shop.draw();
        const ctx = this.canvas.getContext("2d");
        Utility.writeTextToCanvas(ctx, `${this.earnedCoins}`, 60, this.canvas.width / 2, this.canvas.height / 10, "center", "white");
        this.images.forEach((image) => {
            image.draw(ctx);
        });
        this.shopButtons.forEach((button) => {
            button.draw();
        });
    }
    ShopScreenDetection(button) {
        if (button.getButtonName() === "BackToStart") {
            this.screenName = "StartScreen";
            this.resetButtonsAndDangerDashFrame();
        }
        if (button.getButtonName() === "UnlockYoshi" && this.earnedCoins >= 50) {
            this.earnedCoins -= 50;
            this.images.push(new YoshiUnlocked(this.canvas.width / 7.9, this.canvas.height / 6));
            this.DeleteSpecificShopButton("UnlockYoshi");
            this.start.pushYoshi();
            console.log(this.images);
        }
        else if (button.getButtonName() === "UnlockAmongUs" && this.earnedCoins >= 100) {
            this.earnedCoins -= 100;
            this.images.push(new YellowAmongUsUnlocked(this.canvas.width / 2.9, this.canvas.height / 6));
            this.DeleteSpecificShopButton("UnlockAmongUs");
            this.start.pushYellowAmongUs();
        }
        else if (button.getButtonName() === "UnlockGirlCharacter" && this.earnedCoins >= 150) {
            this.earnedCoins -= 150;
            this.images.push(new GirlCharacterUnlocked(this.canvas.width / 1.75, this.canvas.height / 6));
            this.DeleteSpecificShopButton("UnlockGirlCharacter");
            this.start.pushGirl();
        }
        else if (button.getButtonName() === "UnlockSonic" && this.earnedCoins >= 200) {
            this.earnedCoins -= 200;
            this.images.push(new SonicUnlocked(this.canvas.width / 1.29, this.canvas.height / 6));
            this.DeleteSpecificShopButton("UnlockSonic");
            this.start.pushSonic();
        }
        else if (button.getButtonName() === "UnlockSwamp" && this.earnedCoins >= 200) {
            this.earnedCoins -= 200;
            this.images.push(new SwampPlanetUnlocked(this.canvas.width / 2.33, this.canvas.height / 1.64));
            this.DeleteSpecificShopButton("UnlockSwamp");
        }
        else if (button.getButtonName() === "UnlockDesert" && this.earnedCoins >= 100) {
            this.earnedCoins -= 100;
            this.images.push(new DesertPlanetUnlocked(this.canvas.width / 4.3, this.canvas.height / 1.6));
            this.DeleteSpecificShopButton("UnlockDesert");
            this.start.pushDesert();
        }
        else if (button.getButtonName() === "UnlockArctic" && this.earnedCoins >= 300) {
            this.earnedCoins -= 300;
            this.images.push(new ArcticPlanetUnlocked(this.canvas.width / 1.56, this.canvas.height / 1.646));
            this.DeleteSpecificShopButton("UnlockArctic");
            this.start.pushArtic();
        }
    }
    DeleteSpecificShopButton(buttonname) {
        this.shopButtons.forEach((button, index) => {
            if (button.getButtonName() === `${buttonname}`) {
                this.shopButtons.splice(index, 1);
            }
        });
    }
    HighScoreScreenDetection(button) {
        if (button.getButtonName() === "BackToStart") {
            this.screenName = "StartScreen";
            this.resetButtonsAndDangerDashFrame();
        }
    }
    QAndAScreenDetection(button) {
        if (button.getButtonName() === "BackToStart") {
            this.screenName = "StartScreen";
            this.resetButtonsAndDangerDashFrame();
        }
    }
    startScreenDetection(button) {
        this.start.worldSelector(button);
        this.start.characterSelector(button);
        button.logButtonName();
        if (button.getButtonName() === "StartGame") {
            if (this.screenName === "Endscreen") {
                this.screenName = "Endscreen";
            }
            this.screenName = "GameScreen";
            this.start.startLevel(button);
            this.resetButtonsAndDangerDashFrame();
        }
        else if (button.getButtonName() === "Shop") {
            this.screenName = "ShopScreen";
            this.resetButtonsAndDangerDashFrame();
        }
        else if (button.getButtonName() === "HighScore") {
            this.screenName = "HighScoreScreen";
            this.resetButtonsAndDangerDashFrame();
        }
        else if (button.getButtonName() === "QandA") {
            this.screenName = "Q&AScreen";
            this.resetButtonsAndDangerDashFrame();
        }
    }
    buttonMakerGeneralQuestions() {
        this.buttons.push(new BackToStart((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09, this.canvas));
    }
    buttonMakerStartScreen() {
        this.buttons.push(new StartGameButton(this.canvas.width / 2 - 329 / 2, (this.canvas.height / 5) * 4 - 100 / 2, this.canvas));
        this.buttons.push(new ShopButton(this.canvas.width / 5 - 329 / 2, (this.canvas.height / 6) * 4, this.canvas));
        this.buttons.push(new HighscoreButton((this.canvas.width / 5) * 4 - 329 / 2, (this.canvas.height / 6) * 4, this.canvas));
        this.buttons.push(new PreviousCharacter(this.canvas.width / 4, this.canvas.height / 2 - 89, this.canvas));
        this.buttons.push(new NextCharacter((this.canvas.width / 4) * 3 - 143, this.canvas.height / 2 - 89, 1, this.canvas));
        this.buttons.push(new PreviousWorld((this.canvas.width / 7) * 2, this.canvas.height / 3 - 89, this.canvas));
        this.buttons.push(new NextWorld((this.canvas.width / 7) * 5 - 143, this.canvas.height / 3 - 89, 1, this.canvas));
        this.buttons.push(new QuestionsAnswersButton(this.canvas.width - 180, 50, this.canvas));
    }
    buttonMakerShopScreen() {
        this.shopButtons.push(new BackToStart((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09, this.canvas));
        this.shopButtons.push(new UnlockDesert(this.canvas.width / 4.5, this.canvas.height / 1.08, this.canvas));
        this.shopButtons.push(new UnlockArctic(this.canvas.width / 1.56, this.canvas.height / 1.08, this.canvas));
        this.shopButtons.push(new UnlockSwamp(this.canvas.width / 2.31, this.canvas.height / 1.08, this.canvas));
        this.shopButtons.push(new UnlockYoshi(this.canvas.width / 9, this.canvas.height / 2.15, this.canvas));
        this.shopButtons.push(new UnlockAmongUs(this.canvas.width / 3.1, this.canvas.height / 2.15, this.canvas));
        this.shopButtons.push(new UnlockGirlCharacter(this.canvas.width / 1.87, this.canvas.height / 2.15, this.canvas));
        this.shopButtons.push(new UnlockSonic(this.canvas.width / 1.34, this.canvas.height / 2.15, this.canvas));
    }
    resetButtonsAndDangerDashFrame() {
        this.buttons = [];
        this.DangerDashFrame = 0;
    }
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
class Utility {
    static writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "black") {
        ctx.font = `${fontSize}px Arial`;
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
class Button {
    constructor(xPos, yPos, canvas) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.canvas = canvas;
    }
    move(canvas) { }
    reloadImage(canvas) { }
    getButtonName() {
        return this.name;
    }
    getButtonXPos() {
        return this.xPos;
    }
    getButtonYPos() {
        return this.yPos;
    }
    getButtonImage() {
        return this.image;
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
    logButtonName() {
        console.log(this.name);
    }
    getButtonImageWidth() {
        return this.image.width;
    }
    getButtonImageHeight() {
        return this.image.height;
    }
}
class BackToStart extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "BackToStart";
        this.image = Utility.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
}
class NoButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "NoButton";
        this.image = Utility.loadNewImage("./assets/img/buttons/noButton.png");
    }
}
class QuestionsAnswersButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "QandA";
        this.image = Utility.loadNewImage("./assets/img/buttons/info-button.png");
    }
}
class RestartButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "RestartButton";
        this.image = Utility.loadNewImage("./assets/img/buttons/RestartButton.png");
    }
}
class ShopButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "Shop";
        this.image = Utility.loadNewImage("./assets/img/buttons/shop-button.png");
    }
}
class ShowStartScreen extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "StartScreen";
        this.image = Utility.loadNewImage("./assets/img/buttons/start-button.png");
    }
}
class StartGameButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "StartGame";
        this.image = Utility.loadNewImage("./assets/img/buttons/start-button.png");
    }
}
class YesButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "YesButton";
        this.image = Utility.loadNewImage("./assets/img/buttons/yesButton.png");
    }
}
class HighscoreButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "HighScore";
        this.image = Utility.loadNewImage("./assets/img/buttons/high-score-button.png");
    }
}
class NextCharacter extends Button {
    constructor(xPos, yPos, index, canvas) {
        super(xPos, yPos, canvas);
        this.name = "NextCharacter";
        this.image = Utility.loadNewImage("./assets/img/buttons/arrow-right.png");
    }
}
class NextWorld extends Button {
    constructor(xPos, yPos, index, canvas) {
        super(xPos, yPos, canvas);
        this.name = "NextWorld";
        this.image = Utility.loadNewImage("./assets/img/buttons/arrow-right.png");
    }
}
class PreviousCharacter extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "PreviousCharacter";
        this.image = Utility.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
}
class PreviousWorld extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "PreviousWorld";
        this.image = Utility.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
}
class UnlockAmongUs extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockAmongUs";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
        this.canvas = canvas;
    }
    drawUnlockedAmongUs() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(Utility.loadNewImage("./assets/img/players/YellowAUUnlocked.png"), this.canvas.width / 2.9, this.canvas.height / 6);
    }
}
class UnlockArctic extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockArctic";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockDesert extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockDesert";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockGirlCharacter extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockGirlCharacter";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockSonic extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockSonic";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockSwamp extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockSwamp";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockYoshi extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockYoshi";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class Images {
    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
    move(canvas) { }
    reloadImage(canvas) { }
    getAnswer() {
        return this.answer;
    }
    getImageName() {
        return this.name;
    }
    getImageXPos() {
        return this.xPos;
    }
    getImageYPos() {
        return this.yPos;
    }
    getImageImage() {
        return this.image;
    }
    getImageImageWidth() {
        return this.image.width;
    }
    getImageImageHeight() {
        return this.image.height;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class AmongUsChar extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "AmongUsLime";
        this.image = Utility.loadNewImage("./assets/img/Characters/AmongUs/amongUsLime.png");
    }
}
class ArcticPlanet extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "ArcticPlanet";
        this.image = Utility.loadNewImage("./assets/img/world/ArcticPlanet.png");
    }
}
class ArcticPlanetUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Artic";
        this.image = Utility.loadNewImage("./assets/img/world/ArcticUnlocked.png");
    }
}
class ArticImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Artic";
        this.image = Utility.loadNewImage("./assets/img/world/artic.png");
    }
}
class Cloud extends Images {
    constructor(xPos, yPos, xVelocity) {
        super(xPos, yPos);
        this.image = Utility.loadNewImage("./assets/img/background/cloud.png");
        this.xVelocity = xVelocity;
    }
    move(canvas) {
        this.xPos += this.xVelocity;
    }
    reloadImage(canvas) {
        if ((this.xPos + this.getImageImageWidth() < canvas.width + 0.75 &&
            this.xPos + this.getImageImageWidth() > canvas.width - 0.75) ||
            this.xPos < 0) {
            this.xVelocity = -this.xVelocity;
        }
    }
}
class Coin extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Coin";
        this.image = Utility.loadNewImage("./assets/img/GameItems/coin.png");
    }
}
class Control extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Control";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/control.png");
    }
}
class DesertPlanet extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "DesertPlanet";
        this.image = Utility.loadNewImage("./assets/img/world/DesertPlanet.png");
    }
}
class DesertPlanetUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "DesertUnlocked";
        this.image = Utility.loadNewImage("./assets/img/world/DesertUnlocked.png");
    }
}
class DownLane extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "downLane";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/downLane.png");
    }
}
class EndscreenBackground extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "EndscreenBG";
        this.image = Utility.loadNewImage("./assets/img/background/EndscreenBackground.jpg");
    }
}
class GirlCharacter extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "GirlCharacter";
        this.image = Utility.loadNewImage("./assets/img/players/WazigGirl.png");
    }
}
class GirlCharacterUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "GirlCharacterUnlocked";
        this.image = Utility.loadNewImage("./assets/img/players/girl.png");
    }
}
class HighScoreTitle extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "highScoreTitle";
        this.image = Utility.loadNewImage("./assets/img/Highscore/highScoreTitle.png");
    }
}
class InGameQuestionImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Questions";
        this.image = Utility.loadNewImage("./assets/img/InGameQuestions/inGameQuestionsImage.png");
    }
}
class MarsUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "MarsUnlocked";
        this.image = Utility.loadNewImage("./assets/img/world/MarsUnlocked.png");
    }
}
class MidLane extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "midLane";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/midLane.png");
    }
}
class MoonUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "MoonUnlocked";
        this.image = Utility.loadNewImage("./assets/img/world/MoonUnlocked.png");
    }
}
class Question1 extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.answer = "yes";
        this.image = Utility.loadNewImage("/assets/img/QuestionsImages/question1.png");
    }
}
class Question2 extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.answer = "no";
        this.image = Utility.loadNewImage("/assets/img/QuestionsImages/question2.png");
    }
}
class Question3 extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.answer = "no";
        this.image = Utility.loadNewImage("/assets/img/QuestionsImages/question3.png");
    }
}
class Question4 extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.answer = "no";
        this.image = Utility.loadNewImage("/assets/img/QuestionsImages/question4.png");
    }
}
class Question5 extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.answer = "no";
        this.image = Utility.loadNewImage("/assets/img/QuestionsImages/question5.png");
    }
}
class Question6 extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.answer = "no";
        this.image = Utility.loadNewImage("/assets/img/QuestionsImages/question6.png");
    }
}
class QuestionBoxText extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "questionBox";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/questionBox.png");
    }
}
class Questions extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Questions";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/questions.png");
    }
}
class Ranking extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "ranking";
        this.image = Utility.loadNewImage("./assets/img/Highscore/ranking.png");
    }
}
class ShieldBooster extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "shieldBooster";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/shieldBooster.png");
    }
}
class SonicUnlockable extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Sonic";
        this.image = Utility.loadNewImage("./assets/img/players/Sonic.png");
    }
}
class SonicUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "SonicUnlocked";
        this.image = Utility.loadNewImage("./assets/img/players/SonicUnlocked.png");
    }
}
class StewieUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "StewieUnlocked";
        this.image = Utility.loadNewImage("./assets/img/players/StewieUnlocked.png");
    }
}
class Stickman extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Stickman";
        this.image = Utility.loadNewImage("./assets/img/Characters/Stickman/stickman.png");
    }
}
class SwampImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Swamp";
        this.image = Utility.loadNewImage("./assets/img/world/swamp.png");
    }
}
class SwampPlanet extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "SwampPlanet";
        this.image = Utility.loadNewImage("./assets/img/world/SwampPlanet.png");
    }
}
class SwampPlanetUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "SwampUnlocked";
        this.image = Utility.loadNewImage("./assets/img/world/SwampUnlocked.png");
    }
}
class TextCoin extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "textCoin";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/textCoin.png");
    }
}
class TextObstacle extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "textObstacle";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/textObstacle.png");
    }
}
class Titel extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Titel";
        this.image = Utility.loadNewImage("./assets/img/world/Titel.png");
    }
}
class UpperLane extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "upperLane";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/upperLane.png");
    }
}
class VenusUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "VenusUnlocked";
        this.image = Utility.loadNewImage("./assets/img/world/VenusUnlocked.png");
    }
}
class YellowAmongUsUnlockable extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "YellowAmongUs";
        this.image = Utility.loadNewImage("./assets/img/players/yellowAU.png");
    }
}
class YellowAmongUsUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "UnlockYellowAmongUs";
        this.image = Utility.loadNewImage("./assets/img/players/yellowAUUnlocked.png");
    }
}
class YoshiUnlockable extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Yoshi";
        this.image = Utility.loadNewImage("./assets/img/players/yoshi.png");
    }
}
class YoshiUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "YoshiUnlocked";
        this.image = Utility.loadNewImage("./assets/img/players/YoshiUnlocked.png");
    }
}
class coinForShop extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "CoinForShop";
        this.image = Utility.loadNewImage("./assets/img/GameItems/coinForShop.png");
    }
}
class DesertImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Desert";
        this.image = Utility.loadNewImage("./assets/img/world/desert.png");
    }
}
class OceanImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Ocean";
        this.image = Utility.loadNewImage("./assets/img/world/ocean.png");
    }
}
class InGameQuestions {
    constructor(canvasId) {
        this.mouseHandler = (event) => {
            console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
            this.buttons.forEach((button) => {
                if (event.clientX >= button.getButtonXPos() &&
                    event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
                    event.clientY >= button.getButtonYPos() &&
                    event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()) {
                    if (button.getButtonName() === "YesButton" &&
                        this.ingameQuestion.getAnswer() === "yes") {
                        console.log("Goed het antwoord is Yes");
                    }
                    if (button.getButtonName() === "YesButton" &&
                        this.ingameQuestion.getAnswer() === "no") {
                        console.log("Fout het antwoord is Yes");
                        new Start(document.getElementById("canvas"));
                    }
                    if (button.getButtonName() === "NoButton" &&
                        this.ingameQuestion.getAnswer() === "no") {
                        console.log("Goed het antwoord is NO");
                    }
                    if (button.getButtonName() === "NoButton" &&
                        this.ingameQuestion.getAnswer() === "yes") {
                        console.log("Fout het antwoord is NO");
                        new Start(document.getElementById("canvas"));
                    }
                }
            });
        };
        document.addEventListener("click", this.mouseHandler);
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.buttons = [];
        this.questionBackground = new InGameQuestionImage(this.canvas.width / 3, 150);
        this.buttonMaker();
        this.randomQuestionGenerator();
        this.draw();
    }
    getButtonXPos() {
        return this.xPos;
    }
    getButtonYPos() {
        return this.yPos;
    }
    getButtonImageWidth() {
        return this.image.width;
    }
    getButtonImageHeight() {
        return this.image.height;
    }
    getButtonName() {
        return this.name;
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.questionBackground.draw(ctx);
        this.ingameQuestion.getImageImage();
        this.buttons.forEach((button) => {
            button.draw();
        });
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    buttonMaker() {
        this.buttons.push(new YesButton((this.canvas.width / 3) * 1.05, (this.canvas.height / 2) * 1.5, this.canvas));
        this.buttons.push(new NoButton((this.canvas.width / 2) * 1.05, (this.canvas.height / 2) * 1.5, this.canvas));
    }
    randomQuestionGenerator() {
        const random = GameItem.randomInteger(1, 6);
        if (random === 1) {
            console.log("Random was 1 push question 1");
            this.ingameQuestion = new Question1((this.canvas.width / 3) * 1.2, this.canvas.height / 2.5);
        }
        if (random === 2) {
            console.log("Random was 2 push question 2");
            this.ingameQuestion = new Question2((this.canvas.width / 3) * 1.2, this.canvas.height / 2.5);
        }
        if (random === 3) {
            console.log("Random was 3 push question 3");
            this.ingameQuestion = new Question3((this.canvas.width / 3) * 1.2, this.canvas.height / 2.5);
        }
        if (random === 4) {
            console.log("Random was 4 push question 4");
            this.ingameQuestion = new Question4((this.canvas.width / 3) * 1.2, this.canvas.height / 2.5);
        }
        if (random === 5) {
            console.log("Random was 5 push question 5");
            this.ingameQuestion = new Question5((this.canvas.width / 3) * 1.2, this.canvas.height / 2.5);
        }
        if (random === 6) {
            console.log("Random was 6 push question 6");
            this.ingameQuestion = new Question6((this.canvas.width / 3) * 1.2, this.canvas.height / 2.5);
        }
    }
}
class ScoringItem {
    constructor(canvas) {
        this.canvas = canvas;
        this.topLane = this.canvas.height / 4;
        this.middleLane = this.canvas.height / 2;
        this.lowerLane = (this.canvas.height / 4) * 3;
        const random = GameItem.randomInteger(1, 3);
        if (random === 1) {
            this.yPosition = this.topLane;
        }
        if (random === 2) {
            this.yPosition = this.middleLane;
        }
        if (random === 3) {
            this.yPosition = this.lowerLane;
        }
        this.speed = -12;
        this.xPosition = this.canvas.width;
    }
    getPositionX() {
        return this.xPosition;
    }
    getPositionY() {
        return this.yPosition;
    }
    getImageWidth() {
        return this.image.width;
    }
    getImageHeight() {
        return this.image.height;
    }
    getPoints() {
        return this.points;
    }
    getLives() {
        return this.lives;
    }
    getName() {
        return this.name;
    }
    getCoinValue() {
        return this.earnedCoins;
    }
    getSpeed() {
        return this.speed;
    }
    move() {
        this.xPosition += this.speed;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPosition, this.yPosition);
    }
    outOfCanvas() {
        if (this.xPosition + this.image.width < 0) {
            return true;
        }
        return false;
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
class inGameCoin extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/GameItems/coin.png");
        this.points = 10;
        this.lives = 0;
        this.earnedCoins = 1;
    }
}
class GameItem {
    constructor(canvas) {
        this.canvas = canvas;
        this.earnedCoins = 0;
        this.topLane = this.canvas.height / 4;
        this.middleLane = this.canvas.height / 2;
        this.lowerLane = this.canvas.height / 4 * 3;
    }
    getTotalCoins() {
        this.earnedCoins++;
        console.log(this.earnedCoins);
    }
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
class IngameCoin extends ScoringItem {
    constructor(canvas) {
        super(canvas);
    }
}
class QuestionBox extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/GameItems/ocean/questionBox.png");
        this.points = 0;
        this.lives = +1;
        this.earnedCoins = 0;
        this.name = "QuestionBox";
    }
}
class IceBerg1 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Artic/articIceBerg1.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class IceBerg2 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Artic/articIceBerg2.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class IceBerg3 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Artic/articIceBerg3.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class IcePool extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Artic/articIcePool.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class Penguin extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Artic/articPenguin.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class SeaLion extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Artic/articSeaLion.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class Bushes extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Desert/desertBushes.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class Cactus1 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Desert/Cactus1.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class Cactus2 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Desert/Cactus2.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class DesertCoin extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Desert/desertCoin.png");
        this.points = 15;
        this.lives = 0;
        this.earnedCoins = 1;
    }
}
class DesertStone1 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Desert/desertStone1.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class DesertStone2 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Desert/desertStone2.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class Skull extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Desert/desertSkull.png");
        this.points = 20;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class Urn extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Desert/Urn.png");
        this.points = 20;
        this.lives = 0;
        this.earnedCoins = 0;
    }
}
class Player extends GameItem {
    constructor(canvas) {
        super(canvas);
        this.keyboardListener = new KeyboardListener();
        this.yPos = this.canvas.height / 2;
        this.xPos = this.canvas.width / 7;
        this.animationFrame = 0;
    }
    move() {
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_1) &&
            this.yPos === this.middleLane) {
            this.yPos = this.topLane;
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_2) &&
            this.yPos === this.topLane) {
            this.yPos = this.middleLane;
        }
        else if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_2) &&
            this.yPos === this.lowerLane) {
            this.yPos = this.middleLane;
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_3) &&
            this.yPos === this.middleLane) {
            this.yPos = this.lowerLane;
        }
    }
    characterAnimation() { }
    draw(ctx) {
        this.characterAnimation();
    }
    collidesWithScoringItem(ScoringItem) {
        if (this.xPos + this.image.width > ScoringItem.getPositionX() &&
            this.yPos <
                ScoringItem.getPositionY() + ScoringItem.getImageHeight() / 2 &&
            this.yPos + this.image.height >
                ScoringItem.getPositionY() + ScoringItem.getImageHeight() / 2 &&
            this.xPos < ScoringItem.getImageWidth() + ScoringItem.getPositionX()) {
            return true;
        }
        return false;
    }
}
class AmongUs extends Player {
    constructor(canvas) {
        super(canvas);
        this.walk1 = Utility.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-1.png");
        this.walk2 = Utility.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-2.png");
        this.walk3 = Utility.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-3.png");
    }
    characterAnimation() {
        const ctx = this.canvas.getContext("2d");
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 10) {
            this.image = this.walk1;
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 20) {
            this.image = this.walk2;
        }
        else if (this.animationFrame > 20 && this.animationFrame <= 30) {
            this.image = this.walk3;
        }
        else if (this.animationFrame > 30 && this.animationFrame <= 40) {
            this.image = this.walk2;
        }
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class Girl extends Player {
    constructor(canvas) {
        super(canvas);
        this.walk1 = Utility.loadNewImage("./assets/img/Characters/GirlCharacter/girl-walk-1.png");
        this.walk2 = Utility.loadNewImage("./assets/img/Characters/GirlCharacter/girl-walk-2.png");
        this.walk3 = Utility.loadNewImage("./assets/img/Characters/GirlCharacter/girl-walk-3.png");
    }
    characterAnimation() {
        const ctx = this.canvas.getContext("2d");
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 10) {
            this.image = this.walk1;
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 20) {
            this.image = this.walk2;
        }
        else if (this.animationFrame > 20 && this.animationFrame <= 30) {
            this.image = this.walk3;
        }
        else if (this.animationFrame > 30 && this.animationFrame <= 40) {
            this.image = this.walk2;
        }
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class Sonic extends Player {
    constructor(canvas) {
        super(canvas);
        this.walk1 = Utility.loadNewImage("./assets/img/Characters/Sonic/sonic-animatie1.png");
        this.walk2 = Utility.loadNewImage("./assets/img/Characters/Sonic/sonic-animatie2.png");
        this.walk3 = Utility.loadNewImage("./assets/img/Characters/Sonic/sonic-animatie3.png");
    }
    characterAnimation() {
        const ctx = this.canvas.getContext("2d");
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 10) {
            this.image = this.walk1;
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 20) {
            this.image = this.walk2;
        }
        else if (this.animationFrame > 20 && this.animationFrame <= 30) {
            this.image = this.walk3;
        }
        else if (this.animationFrame > 30 && this.animationFrame <= 40) {
            this.image = this.walk2;
        }
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class YellowAmongUs extends Player {
    constructor(canvas) {
        super(canvas);
        this.walk1 = Utility.loadNewImage("./assets/img/Characters/AmongUsYellow/amongUs-animatie1.png");
        this.walk2 = Utility.loadNewImage("./assets/img/Characters/AmongUsYellow/amongUs-animatie2.png");
        this.walk3 = Utility.loadNewImage("./assets/img/Characters/AmongUsYellow/amongUs-animatie3.png");
    }
    characterAnimation() {
        const ctx = this.canvas.getContext("2d");
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 10) {
            this.image = this.walk1;
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 20) {
            this.image = this.walk2;
        }
        else if (this.animationFrame > 20 && this.animationFrame <= 30) {
            this.image = this.walk3;
        }
        else if (this.animationFrame > 30 && this.animationFrame <= 40) {
            this.image = this.walk2;
        }
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class Yoshi extends Player {
    constructor(canvas) {
        super(canvas);
        this.walk1 = Utility.loadNewImage("./assets/img/Characters/Yoshi/yoshi.png");
    }
    characterAnimation() {
        const ctx = this.canvas.getContext("2d");
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 10) {
            this.image = this.walk1;
            this.xPos = this.xPos = this.canvas.width / 84 * 12;
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 20) {
            this.image = this.walk1;
            this.xPos = this.xPos = this.canvas.width / 84 * 13;
        }
        else if (this.animationFrame > 20 && this.animationFrame <= 30) {
            this.image = this.walk1;
            this.xPos = this.xPos = this.canvas.width / 84 * 14;
        }
        else if (this.animationFrame > 30 && this.animationFrame <= 40) {
            this.image = this.walk1;
            this.xPos = this.xPos = this.canvas.width / 84 * 13;
        }
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class Coral1 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/obstacles/Ocean/oceanCoral1.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class Coral2 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/obstacles/Ocean/oceanCoral2.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class Fish extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/obstacles/Ocean/oceanFish.png");
        this.points = 5;
        this.lives = 0;
        this.name = "Fish";
        this.earnedCoins = 0;
    }
}
class Pearl extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/obstacles/Ocean/oceanPearl.png");
        this.points = 20;
        this.lives = 0;
        this.name = "Pearl";
        this.earnedCoins = 0;
    }
}
class Rock1 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/obstacles/Ocean/oceanRock1.png");
        this.points = -20;
        this.lives = -1;
        this.name = "Rock";
        this.earnedCoins = 0;
    }
}
class Rock2 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/obstacles/Ocean/oceanFish.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class Shark extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/obstacles/Ocean/oceanShark.png");
        this.points = -20;
        this.lives = -1;
        this.name = "Shark";
        this.earnedCoins = 0;
    }
}
class Frog extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Swamp/Frog.png");
        this.points = 20;
        this.lives = 0;
        this.earnedCoins = 0;
    }
}
class GoldenFrog extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Swamp/GoldenFrog.png");
        this.points = 20;
        this.lives = 0;
        this.earnedCoins = 0;
    }
}
class SwampStone1 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Swamp/swampStone1.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class SwampStone2 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Swamp/swampStone2.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class SwampTree1 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Swamp/swampTree1.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class SwampTree2 extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/obstacles/Swamp/swampTree2.png");
        this.points = -10;
        this.lives = -1;
        this.earnedCoins = 0;
    }
}
class Game extends DangerDash {
    constructor(canvas, characterName) {
        super(canvas);
        this.loop = () => {
            if (this.gameState === "question") {
            }
            if (this.gameState === "Running") {
                this.frame++;
                this.draw();
                this.forScoringItems();
                this.frameIndex();
                if (this.frame % 10 === 0) {
                    this.player.move();
                }
            }
            if (this.lives < 0) {
                this.gameState = "GameOver";
                this.gameOver();
            }
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.score = 0;
        this.lives = 3;
        this.earnedCoins = 0;
        this.frame = 0;
        this.speed;
        this.scoringItems = [];
        this.gameState = "Running";
        this.characterName = characterName;
        console.log(this.characterName);
        if (this.characterName === "AmongUsLime") {
            this.player = new AmongUs(canvas);
        }
        else if (this.characterName === "Yoshi") {
            this.player = new Yoshi(canvas);
        }
        else if (this.characterName === "YellowAmongUs") {
            this.player = new YellowAmongUs(canvas);
        }
        else if (this.characterName === "Girl") {
            this.player = new Girl(canvas);
        }
        else if (this.characterName === "Sonic") {
            this.player = new Sonic(canvas);
        }
    }
    getGameState() {
        return this.gameState;
    }
    setGameState(gameState) {
        this.gameState = gameState;
    }
    randomScoringItems() { }
    mathRandom() { }
    frameIndex() {
        if (this.frame % 10 === 0) {
            this.score++;
        }
        if (this.frame % 100 === 0) {
            this.randomScoringItems();
        }
    }
    checkGameState() {
        return this.gameState;
    }
    forScoringItems() {
        if (this.frame > 1) {
            this.scoringItems.forEach((scoringItem) => {
                scoringItem.move();
            });
            for (let i = 0; i < this.scoringItems.length; i++) {
                if (this.player.collidesWithScoringItem(this.scoringItems[i])) {
                    this.score += this.scoringItems[i].getPoints();
                    this.lives += this.scoringItems[i].getLives();
                    this.earnedCoins += this.scoringItems[i].getCoinValue();
                    this.scoringItems.splice(i, 1);
                }
                else if (this.scoringItems[i].outOfCanvas()) {
                    this.scoringItems.splice(i, 1);
                }
            }
        }
    }
    drawBackground() { }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.player.draw(ctx);
        if (this.frame > 1) {
            this.scoringItems.forEach((scoringItem) => scoringItem.draw(ctx));
        }
        this.drawScore(ctx);
        this.drawLives(ctx);
    }
    drawScore(ctx) {
        Utility.writeTextToCanvas(ctx, `Score: ${this.score}`, 60, this.canvas.width / 2, this.canvas.height / 8, null, "red");
        ctx.drawImage(Utility.loadNewImage("assets/img/GameItems/coin.png"), this.canvas.width / 20, this.canvas.height / 8);
        Utility.writeTextToCanvas(ctx, `${this.earnedCoins}`, 60, this.canvas.width / 8, this.canvas.height / 5, null, "red");
    }
    drawLives(ctx) {
        if (this.lives == 3) {
            ctx.drawImage(Utility.loadNewImage("/assets/img/GameItems/HealthBar/FullHP.png"), (this.canvas.width / 8) * 7, this.canvas.height / 8);
        }
        if (this.lives == 2) {
            ctx.drawImage(Utility.loadNewImage("/assets/img/GameItems/HealthBar/2Lives.png"), (this.canvas.width / 8) * 7, this.canvas.height / 8);
        }
        if (this.lives == 1) {
            ctx.drawImage(Utility.loadNewImage("/assets/img/GameItems/HealthBar/1Live.png"), (this.canvas.width / 8) * 7, this.canvas.height / 8);
        }
        if (this.lives == 0) {
            ctx.drawImage(Utility.loadNewImage("/assets/img/GameItems/HealthBar/0Lives.png"), (this.canvas.width / 8) * 7, this.canvas.height / 8);
        }
        if (this.lives < 0) {
            ctx.drawImage(Utility.loadNewImage("/assets/img/GameItems/HealthBar/Dead.png"), (this.canvas.width / 8) * 7, this.canvas.height / 8);
        }
    }
    gameOver() {
        new Endscreen(this.canvas, this.score);
    }
}
class ArticWorld extends Game {
    constructor(canvas, characterName) {
        super(canvas, characterName);
        this.background = Utility.loadNewImage("./assets/img/world/ArticBG.jpg");
        this.xPos = 0;
        this.yPos = -100;
    }
    drawBackground() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(this.background, this.xPos, this.yPos);
    }
    randomScoringItems() {
        const random = GameItem.randomInteger(1, 10);
        if (random === 1) {
            this.scoringItems.push(new IceBerg1(this.canvas));
        }
        if (random === 2) {
            this.scoringItems.push(new IceBerg2(this.canvas));
        }
        if (random === 3) {
            this.scoringItems.push(new IceBerg3(this.canvas));
        }
        if (random === 4) {
            this.scoringItems.push(new IcePool(this.canvas));
        }
        if (random === 5 || random === 6) {
            this.scoringItems.push(new inGameCoin(this.canvas));
        }
        if (random === 7) {
            this.scoringItems.push(new QuestionBox(this.canvas));
        }
        if (random === 8) {
            this.scoringItems.push(new Penguin(this.canvas));
        }
        if (random === 9) {
            this.scoringItems.push(new SeaLion(this.canvas));
        }
    }
}
class DesertWorld extends Game {
    constructor(canvas, characterName) {
        super(canvas, characterName);
        this.background = Utility.loadNewImage("./assets/img/world/DesertBG.jpg");
        this.xPos = 0;
        this.yPos = -100;
    }
    drawBackground() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(this.background, this.xPos, this.yPos);
    }
    randomScoringItems() {
        const random = GameItem.randomInteger(1, 11);
        if (random === 1) {
            this.scoringItems.push(new Bushes(this.canvas));
        }
        if (random === 2) {
            this.scoringItems.push(new Cactus1(this.canvas));
        }
        if (random === 3) {
            this.scoringItems.push(new Cactus2(this.canvas));
        }
        if (random === 4) {
            this.scoringItems.push(new DesertStone2(this.canvas));
        }
        if (random === 5 || random === 6) {
            this.scoringItems.push(new inGameCoin(this.canvas));
        }
        if (random === 7) {
            this.scoringItems.push(new QuestionBox(this.canvas));
        }
        if (random === 8) {
            this.scoringItems.push(new DesertStone1(this.canvas));
        }
        if (random === 9) {
            this.scoringItems.push(new Skull(this.canvas));
        }
        if (random === 10) {
            this.scoringItems.push(new DesertCoin(this.canvas));
        }
        if (random === 11) {
            this.scoringItems.push(new Urn(this.canvas));
        }
    }
}
class OceanWorld extends Game {
    constructor(canvas, characterName) {
        super(canvas, characterName);
        this.background = Utility.loadNewImage("./assets/img/world/OceanBG.jpg");
        this.xPos = 0;
        this.yPos = -100;
    }
    drawBackground() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(this.background, this.xPos, this.yPos);
    }
    randomScoringItems() {
        const random = GameItem.randomInteger(1, 10);
        if (random === 1) {
            this.scoringItems.push(new Shark(this.canvas));
        }
        if (random === 2) {
            this.scoringItems.push(new Fish(this.canvas));
        }
        if (random === 3) {
            this.scoringItems.push(new Pearl(this.canvas));
        }
        if (random === 4) {
            this.scoringItems.push(new Rock1(this.canvas));
        }
        if (random === 5 || random === 6) {
            this.scoringItems.push(new inGameCoin(this.canvas));
        }
        if (random === 7) {
            this.scoringItems.push(new Coral1(this.canvas));
        }
        if (random === 8) {
            this.scoringItems.push(new Coral2(this.canvas));
        }
        if (random === 9) {
            this.scoringItems.push(new Rock2(this.canvas));
        }
        if (random === 10) {
            this.scoringItems.push(new QuestionBox(this.canvas));
        }
    }
}
class SwampWorld extends Game {
    constructor(canvas, characterName) {
        super(canvas, characterName);
        this.background = Utility.loadNewImage("./assets/img/world/SwampBG.jpg");
        this.xPos = 0;
        this.yPos = -100;
    }
    drawBackground() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(this.background, this.xPos, this.yPos);
    }
    randomScoringItems() {
        const random = GameItem.randomInteger(1, 9);
        if (random === 1) {
            this.scoringItems.push(new Frog(this.canvas));
        }
        if (random === 2) {
            this.scoringItems.push(new SwampStone1(this.canvas));
        }
        if (random === 3 || random === 8) {
            this.scoringItems.push(new SwampStone2(this.canvas));
        }
        if (random === 4) {
            this.scoringItems.push(new SwampTree1(this.canvas));
        }
        if (random === 5 || random === 6) {
            this.scoringItems.push(new inGameCoin(this.canvas));
        }
        if (random === 7) {
            this.scoringItems.push(new SwampTree2(this.canvas));
        }
        if (random === 9) {
            this.scoringItems.push(new GoldenFrog(this.canvas));
        }
    }
}
class Endscreen {
    constructor(canvasId, score) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = innerHeight;
        this.score = score;
        this.buttons = [];
        this.buttonMaker();
        this.image = [];
        this.score = 200;
        this.draw();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(Utility.loadNewImage("./assets/img/background/EndscreenBackground.jpg"), 0, 0);
        this.buttons.forEach((button) => {
            button.draw();
        });
        Utility.writeTextToCanvas(ctx, "Game Over!", 120, this.canvas.width / 2.1, this.canvas.height / 2.25, "center", "white");
        Utility.writeTextToCanvas(ctx, `Your score is ${this.score}`, 60, this.canvas.width / 2.1, this.canvas.height / 1.8, "center", "white");
    }
    buttonMaker() {
        this.buttons.push(new RestartButton(this.canvas.width / 2.5, this.canvas.height / 1.5, this.canvas));
    }
}
class GeneralQuestions {
    constructor(canvasId) {
        this.mouseHandler = (event) => { };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.images = [];
        this.buttons = [];
        this.buttonMaker();
        this.imageMaker();
        document.addEventListener("click", this.mouseHandler);
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.buttons.forEach((button) => {
            button.draw();
        });
        this.images.forEach((image) => {
            image.draw(ctx);
        });
        this.controls(ctx);
        this.titleTextBoxes(ctx);
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09, this.canvas));
    }
    imageMaker() {
        this.images.push(new Control((this.canvas.width / 15) * 0.1, 110));
        this.images.push(new Questions(this.canvas.width / 3, 0));
        this.images.push(new UpperLane((this.canvas.width / 3) * 0.60, 200));
        this.images.push(new MidLane((this.canvas.width / 3) * 0.60, 350));
        this.images.push(new DownLane((this.canvas.width / 3) * 0.60, 500));
        this.images.push(new QuestionBoxText((this.canvas.width / 3) * 1, 435));
        this.images.push(new TextCoin((this.canvas.width / 2) * 1.34, 435));
        this.images.push(new TextObstacle((this.canvas.width / 2) * 1.34, 150));
    }
    controls(ctx) {
        Utility.writeTextToCanvas(ctx, "Bovenste laan:", 40, (this.canvas.width / 9) * 0.92, 265, "center");
        Utility.writeTextToCanvas(ctx, "Middelste laan:", 40, (this.canvas.width / 9) * 0.93, 420, "center");
        Utility.writeTextToCanvas(ctx, "Onderste laan:", 40, (this.canvas.width / 9) * 0.93, 560, "center");
    }
    titleTextBoxes(ctx) {
        Utility.writeTextToCanvas(ctx, "Questionbox", 35, (this.canvas.width / 3) * 1.4, 435, "center");
        Utility.writeTextToCanvas(ctx, "Obstakels", 35, (this.canvas.width / 2) * 1.6, 140, "center");
        Utility.writeTextToCanvas(ctx, "Coins", 35, (this.canvas.width / 2) * 1.6, 435, "center");
    }
}
class HighScore {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.images = [];
        this.buttons = [];
        this.buttonMaker();
        this.imageMaker();
    }
    draw() {
        console.log("Draw in highscore");
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.images.forEach((image) => {
            image.draw(ctx);
        });
        this.buttons.forEach((button) => {
            button.draw();
        });
    }
    imageMaker() {
        this.images.push(new HighScoreTitle(this.canvas.width / 3, 0));
        this.images.push(new Ranking(this.canvas.width / 5, 200));
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 7) * 0.09, (this.canvas.height / 3) * 0.08, this.canvas));
    }
}
class QuestionAndAnswer {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.buttons = [];
        this.buttonMaker();
        this.loop();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        Utility.writeTextToCanvas(ctx, "Questions and Answers", 65, this.canvas.width / 2, 80, "center");
        this.list(ctx);
        this.buttons.forEach((button) => {
            button.draw();
            button.move(this.canvas);
            button.reloadImage(this.canvas);
        });
    }
    list(ctx) {
        Utility.writeTextToCanvas(ctx, "Question 1: Wanneer een onbekend persoon contact met je opneemt, geef je dit dan door aan ouders/verzorgers?", 30, (this.canvas.width / 2) * 0.9, 200, "center");
        Utility.writeTextToCanvas(ctx, "Question 2: Wanneer een onbekend iemand vraagt om een foto van je, stuur je die dan?", 30, (this.canvas.width / 2) * 0.7, 260, "center");
        Utility.writeTextToCanvas(ctx, "Question 3: Voeg je vaak onbekenden toe op sociale media? (Door middel van “snel toevoegen”)", 30, (this.canvas.width / 2) * 0.78, 320, "center");
        Utility.writeTextToCanvas(ctx, "Question 4: Je ziet dat een klasgenoot met een vreemd iemand aan het chatten is. Geef je dit aan?", 30, (this.canvas.width / 2) * 0.78, 380, "center");
        Utility.writeTextToCanvas(ctx, "Question 5: Je krijgt het bericht: “FortNite_100” stuurt je een vriendschap verzoek. Accepteer je dit verzoek?", 30, (this.canvas.width / 2) * 0.88, 440, "center");
        Utility.writeTextToCanvas(ctx, "Question 6: Hoor je in je klas/omgeving vaak over het toevoegen van vreemden op sociale media?", 30, (this.canvas.width / 2) * 0.79, 500, "center");
        Utility.writeTextToCanvas(ctx, "Question 7: Waarschuwen je ouders je over online veiligheid?", 30, (this.canvas.width / 2) * 0.51, 560, "center");
    }
    static writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "black") {
        ctx.font = `${fontSize}px Minecraft`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 7) * 0.09, (this.canvas.height / 3) * 0.08, this.canvas));
    }
}
class Shop {
    constructor(canvas) {
        this.canvas = canvas;
        this.buttons = [];
        this.shopImages = [];
        this.characters = [];
        this.newWorlds = [];
        this.drawUnlockableCharacter();
        this.drawUnlockableWorlds();
    }
    getButtonXPos() {
        return this.xPos;
    }
    getButtonYPos() {
        return this.yPos;
    }
    getButtonImageWidth() {
        return this.image.width;
    }
    getButtonImageHeight() {
        return this.image.height;
    }
    getButtonName() {
        return this.name;
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(Utility.loadNewImage("./assets/img/background/EndscreenBackground.jpg"), 0, 0);
        this.drawImages();
        this.buttons.forEach((button) => {
            button.draw();
        });
        Utility.writeTextToCanvas(ctx, "50", 60, this.canvas.width / 5.8, this.canvas.height / 2.25, "center", "white");
        Utility.writeTextToCanvas(ctx, "100", 60, this.canvas.width / 2.55, this.canvas.height / 2.25, "center", "white");
        Utility.writeTextToCanvas(ctx, "150", 60, this.canvas.width / 1.68, this.canvas.height / 2.25, "center", "white");
        Utility.writeTextToCanvas(ctx, "200", 60, this.canvas.width / 1.24, this.canvas.height / 2.25, "center", "white");
        Utility.writeTextToCanvas(ctx, "300", 60, this.canvas.width / 1.42, this.canvas.height / 1.1, "center", "white");
        Utility.writeTextToCanvas(ctx, "200", 60, this.canvas.width / 2.01, this.canvas.height / 1.1, "center", "white");
        Utility.writeTextToCanvas(ctx, "100", 60, this.canvas.width / 3.4, this.canvas.height / 1.1, "center", "white");
        this.shopImages.forEach((shopImage) => {
            shopImage.move(this.canvas);
            shopImage.reloadImage(this.canvas);
            shopImage.draw(ctx);
        });
        this.characters.forEach((character) => {
            character.reloadImage(this.canvas);
            character.draw(ctx);
        });
        this.newWorlds.forEach((world) => {
            world.reloadImage(this.canvas);
            world.draw(ctx);
        });
    }
    drawImages() {
        this.shopImages.push(new coinForShop(this.canvas.width / 2.3, this.canvas.height / 1.17));
        this.shopImages.push(new coinForShop(this.canvas.width / 4.4, this.canvas.height / 1.17));
        this.shopImages.push(new coinForShop(this.canvas.width / 1.56, this.canvas.height / 1.17));
        this.shopImages.push(new coinForShop(this.canvas.width / 3, this.canvas.height / 2.56));
        this.shopImages.push(new coinForShop(this.canvas.width / 1.33, this.canvas.height / 2.56));
        this.shopImages.push(new coinForShop(this.canvas.width / 9, this.canvas.height / 2.56));
        this.shopImages.push(new coinForShop(this.canvas.width / 1.85, this.canvas.height / 2.56));
        this.shopImages.push(new coinForShop(this.canvas.width / 2.35, this.canvas.height / 22));
    }
    drawUnlockableWorlds() {
        this.newWorlds.push(new DesertPlanet(this.canvas.width / 4.3, this.canvas.height / 1.6));
        this.newWorlds.push(new SwampPlanet(this.canvas.width / 2.33, this.canvas.height / 1.64));
        this.newWorlds.push(new ArcticPlanet(this.canvas.width / 1.56, this.canvas.height / 1.64));
    }
    drawUnlockableCharacter() {
        this.characters.push(new YoshiUnlockable(this.canvas.width / 7.9, this.canvas.height / 6));
        this.characters.push(new YellowAmongUsUnlockable(this.canvas.width / 2.9, this.canvas.height / 6));
        this.characters.push(new GirlCharacter(this.canvas.width / 1.75, this.canvas.height / 6));
        this.characters.push(new SonicUnlockable(this.canvas.width / 1.29, this.canvas.height / 6));
    }
}
class Start {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.characterName = "";
        this.worldImages = [];
        this.characterImages = [];
        this.startImages = [];
        this.background = [];
        this.indexCounterWorld = 0;
        this.indexCounterCharacter = 0;
        this.worldImageMaker();
        this.charachterMaker();
        this.imageMaker();
        this.backgroundLoop();
    }
    getTest() {
        return console.log(this.testPlayer);
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.forEach((backgroundImage) => {
            backgroundImage.draw(ctx);
            backgroundImage.move(this.canvas);
            backgroundImage.reloadImage(this.canvas);
        });
        this.startImages.forEach((startImage) => {
            startImage.draw(ctx);
        });
        for (let i = 0; i < this.characterImages.length; i++) {
            this.characterImages[this.indexCounterCharacter].draw(ctx);
        }
        for (let i = 0; i < this.worldImages.length; i++) {
            this.worldImages[this.indexCounterWorld].draw(ctx);
        }
    }
    worldImageMaker() {
        this.worldImages.push(new OceanImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 130));
    }
    pushDesert() {
        this.worldImages.push(new DesertImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 80));
    }
    pushSwamp() {
        this.worldImages.push(new SwampImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 90));
    }
    pushArtic() {
        this.worldImages.push(new ArticImage(this.canvas.width / 2 - 250, this.canvas.height / 3 - 150));
    }
    charachterMaker() {
        this.characterImages.push(new AmongUsChar(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
    }
    pushYoshi() {
        this.characterImages.push(new YoshiUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
    }
    pushYellowAmongUs() {
        this.characterImages.push(new YellowAmongUsUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
    }
    pushGirl() {
        this.characterImages.push(new GirlCharacterUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
    }
    pushSonic() {
        this.characterImages.push(new SonicUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
    }
    imageMaker() {
        this.startImages.push(new Titel(this.canvas.width / 4, -40));
    }
    backgroundLoop() {
        this.background.push(new Cloud(0, this.canvas.height / 4, 0.5));
    }
    worldSelector(button) {
        if (this.indexCounterWorld == this.worldImages.length - 1 &&
            button.getButtonName() == "NextWorld") {
            this.indexCounterWorld = 0;
        }
        else if (this.indexCounterWorld == 0 &&
            button.getButtonName() == "PreviousWorld") {
            this.indexCounterWorld += this.worldImages.length - 1;
        }
        else if (button.getButtonName() == "PreviousWorld" &&
            this.indexCounterWorld > 0) {
            this.indexCounterWorld -= 1;
        }
        else if (button.getButtonName() == "NextWorld") {
            this.indexCounterWorld += 1;
        }
    }
    characterSelector(button) {
        if (this.indexCounterCharacter == this.characterImages.length - 1 &&
            button.getButtonName() == "NextCharacter") {
            this.indexCounterCharacter = 0;
        }
        else if (this.indexCounterCharacter == 0 &&
            button.getButtonName() == "PreviousCharacter") {
            this.indexCounterCharacter += this.characterImages.length - 1;
        }
        else if (button.getButtonName() == "PreviousCharacter" &&
            this.indexCounterCharacter > 0) {
            this.indexCounterCharacter -= 1;
        }
        else if (button.getButtonName() == "NextCharacter") {
            this.indexCounterCharacter += 1;
        }
    }
    startLevel(button) {
        this.CharacterName();
        if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Ocean") {
            new OceanWorld(this.canvas, `${this.characterName}`);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Artic") {
            new ArticWorld(this.canvas, `${this.characterName}`);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Desert") {
            new DesertWorld(this.canvas, `${this.characterName}`);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Swamp") {
            new SwampWorld(this.canvas, `${this.characterName}`);
        }
    }
    checkCharacterName(button) {
        if (button.getButtonName() == "StartGame" &&
            this.characterImages[this.indexCounterCharacter].getImageName() ===
                "AmongUsLime") {
            new AmongUs(this.canvas);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.characterImages[this.indexCounterCharacter].getImageName() ===
                "YoshiUnlocked") {
            new Yoshi(this.canvas);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.characterImages[this.indexCounterCharacter].getImageName() ===
                "UnlockYellowAmongUs") {
            new YellowAmongUs(this.canvas);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.characterImages[this.indexCounterCharacter].getImageName() ===
                "GirlCharacterUnlocked") {
            new Girl(this.canvas);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.characterImages[this.indexCounterCharacter].getImageName() ==
                "SonicUnlocked") {
            new Sonic(this.canvas);
        }
    }
    CharacterName() {
        if (this.characterImages[this.indexCounterCharacter].getImageName() ===
            "AmongUsLime") {
            this.characterName = "AmongUsLime";
        }
        else if (this.characterImages[this.indexCounterCharacter].getImageName() ===
            "YoshiUnlocked") {
            this.characterName = "Yoshi";
        }
        else if (this.characterImages[this.indexCounterCharacter].getImageName() ===
            "UnlockYellowAmongUs") {
            this.characterName = "YellowAmongUs";
        }
        else if (this.characterImages[this.indexCounterCharacter].getImageName() ===
            "GirlCharacterUnlocked") {
            this.characterName = "Girl";
        }
        else if (this.characterImages[this.indexCounterCharacter].getImageName() ==
            "SonicUnlocked") {
            this.characterName = "Sonic";
        }
    }
}
//# sourceMappingURL=app.js.map