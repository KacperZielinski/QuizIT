import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WordService } from "../../service/word.service";
import { Word } from "../../model/Word";
import { Observable } from "rxjs";

@Component({
  selector: 'new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.scss']
})
export class NewWordComponent implements OnInit {

  randomQuizWords: Observable<Word[]>;
  word: Word = {id: "", english: "", polish: "", german: "", french: ""};

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.randomQuizWords = this.wordService.getWords();
  }

  onSubmit(form: NgForm) {
    this.wordService.addNewWord(this.word);
  }
}
