/// <reference path="Images.ts" />

class Question8 extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.answer = "yes";
      this.image = Utility.loadNewImage("./assets/img/QuestionsImages/question8.png");
    }
  }