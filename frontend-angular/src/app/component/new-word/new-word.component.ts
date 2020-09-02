import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WordService } from "../../service/word.service";
import { Word } from "../../model/Word";

@Component({
  selector: 'new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.scss']
})
export class NewWordComponent implements OnInit {

  randomQuizWords: Word[];
  word: Word = {id: "", english: "", polish: "", german: "", french: ""};

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.wordService.getWords().subscribe({
      next: randomWords => this.randomQuizWords = randomWords
    });
  }

  onSubmit(form: NgForm) {
    this.wordService.addNewWord(this.word);
  }
}
