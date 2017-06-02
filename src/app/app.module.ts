import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Components
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule, MdTabsModule,
  MdToolbarModule
} from "@angular/material";

import 'hammerjs';

import { AppComponent } from './app.component';
import {MarkdownModule} from "angular2-markdown";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdTabsModule,
    MdToolbarModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
