import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  result: string = 'pap';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.result = 'Bingo!';
    }, 5000)
  }

  execute($event: Event) {
    this.result = (<HTMLInputElement>$event.target).value
  }
}
