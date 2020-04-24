import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WordService } from "../../service/word.service";

@Component({
  selector: 'new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.scss']
})
export class NewWordComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private wordService: WordService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      english: '',
      polish: '',
      german: '',
      french: ''
    });
  }

  ngOnInit() {
    this.items = this.wordService.getWords();
  }

  onSubmit(word) {
    this.items = this.wordService.clear();
    this.checkoutForm.reset();

    this.wordService.addNewWord(word);

    console.warn('Your order has been submitted', word);
  }
}
