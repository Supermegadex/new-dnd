import { Component } from '@angular/core';
import { Races } from './races';
import { Race } from './race.model';
import { MdTabGroup } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MdTabGroup]
})
export class AppComponent {
  character; showChar; races = Array<Race>(); points = 6; minmax = 0;
  static getItemByProperty(query, property, arr) {
    let outcome;
    //noinspection TsLint
    for (let i in arr) {
      if (arr[i][property] === query) {
        outcome = arr[i];
      }
    }
    return outcome;
  }
  constructor(public tabs: MdTabGroup) {
    console.log(tabs);
    if (!localStorage.getItem("karmaRoll")) {
      localStorage.setItem("karmaRoll", String(Math.floor(Math.random() * 6)));
    }
    this.character = {
      name: "",
      weapon: "",
      race: "",
      stats: {
        luck: 5,
        str: 0,
        dex: 0,
        int: 0,
        wis: 0
      },
      mod: {
        luck: 0,
        str: 0,
        dex: 0,
        int: 0,
        wis: 0
      },
      karma: 0,
      racial: "",
      img: ""
    };

    this.races = new Races().races;

    this.showChar = false;
  }

  getStat(stat) {
    return this.character.stats[stat] + this.character.mod[stat];
  }

  addPoint(stat) {
    if (this.points > 0) {
      this.character.mod[stat]++;
      this.points--
    }
  }

  subtractPoint(stat) {
    if (this.points < 6 && this.character.mod[stat] > 0) {
      this.character.mod[stat]--;
      this.points++
    }
  }

  pickRace(name) {
    const race = AppComponent.getItemByProperty(name, "name", this.races);
    this.character.stats = race.stats;
    this.character.racial = race.racial;
    this.character.img = race.img;
    this.character.race = race.name;
    this.character.karma = race.karma(localStorage.getItem("karmaRoll"));
    this.showChar = true;
    const nameTab: any = document.querySelector(".mat-tab-label:nth-child(2)");
    nameTab.click();
  }
  getMinMaxClass(el) {
    if (el === "card") {
      switch (this.minmax) {
        case 0:
          return "";
        case 1:
          return "character-card-max";
        case 2:
          return "character-card-min";
      }
    }
    if (el === "button") {
      switch (this.minmax) {
        case 0:
          return "";
        case 1:
          return "character-button-max";
        case 2:
          return "character-button-min";
      }
    }
  }
  toggleCardState() {
    this.minmax === 2 ? this.maximize() : this.minimize();
  }
  maximize() {
    this.minmax = 1;
  }
  minimize() {
    this.minmax = 2;
  }

  chooseName() {
    const statsTab: any = document.querySelector(".mat-tab-label:nth-child(3)");
    statsTab.click();
  }
}
