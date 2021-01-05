import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewWordComponent } from './component/new-word/new-word.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SimpleQuizComponent } from './component/simple-quiz/simple-quiz.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PlaygroundComponent } from './component/playground/playground.component';
import { PropertyBindingComponent } from './component/playground/property-binding/property-binding.component';
import {EventBindingComponent} from "./component/playground/event-binding/event-binding.component";

@NgModule({
  declarations: [
    AppComponent,
    NewWordComponent,
    SimpleQuizComponent,
    NavBarComponent,
    PlaygroundComponent,
    PropertyBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
