/// <reference path="Images.ts" />

class Question15 extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.answer = "yes";
      this.image = Utility.loadNewImage("./assets/img/QuestionsImages/question15.png");
    }
  }