import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleQuizComponent } from './simple-quiz.component';

describe('SimpleQuizComponent', () => {
  let component: SimpleQuizComponent;
  let fixture: ComponentFixture<SimpleQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
