/// <reference path="Images.ts" />

class Question6 extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.answer = "no";
      this.image = Start.loadNewImage("/assets/img/QuestionsImages/question6.png");
    }
  }
  