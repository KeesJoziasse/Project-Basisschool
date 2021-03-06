/// <reference path="Images.ts" />

class QuestionBoxText extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "questionBox";
      this.image = Utility.loadNewImage(
        "./assets/img/GeneralQuestions/questionBox.png"
      );
    }
  }
