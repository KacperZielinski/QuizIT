import { Component, OnInit } from '@angular/core';
import {Word} from "../../model/Word";
import {WordService} from "../../service/word.service";

@Component({
  selector: 'simple-quiz',
  templateUrl: './simple-quiz.component.html',
  styleUrls: ['./simple-quiz.component.scss']
})
export class SimpleQuizComponent implements OnInit {

  quizQuestion: Word[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.getQuizQuestions().subscribe(value => {
        this.quizQuestion = value;
        console.log(value);
    });
  }

}