/// <reference path="Images.ts" />

class Question5 extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.answer = "no";
      this.image = Utility.loadNewImage("./assets/img/QuestionsImages/question5.png");
    }
  }