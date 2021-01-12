/// <reference path = "../ScoringItem.ts"/>

class QuestionBox extends ScoringItem{ 
  public constructor(canvas: HTMLCanvasElement) {
  super(canvas);
  this.image = this.loadNewImage("assets/img/GameItems/ocean/questionBox.png");
  this.points = 0;
  this.lives = +1;
  this.name = "QuestionBox";
  }

}