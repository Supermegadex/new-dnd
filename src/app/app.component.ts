import { Component } from '@angular/core';
import { Races } from './races';
import { Race } from './race.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  character; races = Array<Race>();
  constructor() {
    if(!localStorage.getItem("karmaRoll")) {
      localStorage.setItem("karmaRoll", String(Math.floor(Math.random() * 6) + 1));
    }
    this.character = {
      name: "",
      weapon: "",
      race: "",
      stats: {
        str: 0,
        dex: 0,
        int: 0,
        wis: 0
      },
      karma: 0,
      luck: 5
    };

    this.races = new Races().races;
  }

  static getItemByProperty(query, property, arr) {
    let outcome;
    for (let i in arr) {
      if (arr[i][property] === query) {
        outcome = arr[i];
      }
    }
    return outcome;
  }

  pickRace(name) {
    let race = AppComponent.getItemByProperty(name, "name", this.races);
    console.log(race);
  }
}
