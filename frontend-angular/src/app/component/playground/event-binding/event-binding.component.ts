import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  result: string = '';
  color: string = 'red';
  nums: number[] = [1,2,3];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.result = 'Bingo!';
    }, 5000)

    setTimeout(() => {
      this.color = 'green';
    }, 2000)
  }

  execute($event: Event) {
    this.result = (<HTMLInputElement>$event.target).value
  }

  getColor(): string {
    return this.color;
  }
}
