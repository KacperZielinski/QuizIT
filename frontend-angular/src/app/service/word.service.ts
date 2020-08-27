import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Word} from "../model/Word";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private apiUrl = 'http://localhost:8080/api';

  words = [];

  constructor(private http: HttpClient) {}

  addNewWord(word: Word): Subscription {
    word.id = undefined;
    return this.http.post<Word>(`${this.apiUrl}/word`, word)
      .subscribe({
      next: data => this.words.push(data),
      error: error => console.error('There was an error!', error)
    });
  }

  getWords(): Observable<Word[]> {
    return this.http.get<Word[]>(`${this.apiUrl}/word`);
  }

  getQuizQuestions(): Observable<Word[]> {
    return this.http.get<Word[]>(`${this.apiUrl}/quiz/rand`);
  }

  clear() {
    this.words = [];
    return this.words;
  }
}
