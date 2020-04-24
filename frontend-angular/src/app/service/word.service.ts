import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Word} from "../model/Word";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  words = [];

  constructor(private http: HttpClient) {}

  addNewWord(word: Word): Subscription {
    word.id = undefined;
    return this.http.post<Word>('http://127.0.0.1:8080/api/word', word)
      .subscribe({
      next: data => this.words.push(data),
      error: error => console.error('There was an error!', error)
    });
  }

  getWords() {
    return this.http.get<Word[]>('http://localhost:8080/api/word');
  }

  clear() {
    this.words = [];
    return this.words;
  }
}
