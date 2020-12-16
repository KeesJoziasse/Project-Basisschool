/// <reference path = "ScoringItem.ts"/>

class QuestionBox extends ScoringItem {

    public constructor(canvas: HTMLCanvasElement) {
        super();

        this.canvas = canvas;

        this.image = this.loadNewImage("./assets/img/questionbox.png")


    }

}