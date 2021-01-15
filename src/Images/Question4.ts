/// <reference path="Images.ts" />

class Question4 extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.answer = "no";
      this.image = Start.loadNewImage("/assets/img/QuestionsImages/question4.png");
    }
  }