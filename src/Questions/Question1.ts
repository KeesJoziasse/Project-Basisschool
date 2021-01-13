/// <reference path = "Question.ts"/>

class Question1 extends Question {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanParelBooster.png");
      this.answer = "no"
      this.name = "Question1"
    }
  }