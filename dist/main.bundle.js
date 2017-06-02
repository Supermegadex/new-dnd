webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  max-width: 800px;\n  margin: 20px;\n}\n\n.card-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"accent\">\n  <h1>Nonclassical D&D</h1>\n</md-toolbar>\n<md-tab-group>\n  <md-tab label=\"Race\">\n    <div class=\"card-container\">\n      <md-card>\n        <md-card-header>\n          <md-card-title>Welcome!</md-card-title>\n          <md-card-subtitle>Choose a race.</md-card-subtitle>\n        </md-card-header>\n        <md-card-content>\n          Each race has its own unique abilities and starting traits.\n        </md-card-content>\n      </md-card>\n      <md-card *ngFor=\"let race of races\">\n        <md-card-header>\n          <img md-card-avatar src=\"{{race.img}}\" alt=\"{{race.name}} picture\">\n          <md-card-title>{{race.name}}</md-card-title>\n          <md-card-subtitle><markdown [data]=\"race.background\"></markdown></md-card-subtitle>\n        </md-card-header>\n        <md-card-content>\n          <markdown [data]=\"race.racial\"></markdown>\n          <div class=\"stat-table\">\n            <div class=\"stat-name-column stat-table-column\">\n              <span class=\"stat-name stat-text\">Strength</span>\n              <span class=\"stat-name stat-text\">Dexterity</span>\n              <span class=\"stat-name stat-text\">Intelligence</span>\n              <span class=\"stat-name stat-text\">Wisdom</span>\n            </div>\n            <div class=\"stat-value-column stat-table-column\">\n              <span class=\"stat-value stat-text\">{{race.stats.str}}</span>\n              <span class=\"stat-value stat-text\">{{race.stats.dex}}</span>\n              <span class=\"stat-value stat-text\">{{race.stats.int}}</span>\n              <span class=\"stat-value stat-text\">{{race.stats.wis}}</span>\n            </div>\n          </div>\n        </md-card-content>\n        <md-card-actions style=\"text-align: center\">\n          <button md-raised-button (click)=\"pickRace(race.name)\" color=\"primary\">CHOOSE {{race.name.toLocaleUpperCase()}}</button>\n        </md-card-actions>\n      </md-card>\n    </div>\n  </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__races__ = __webpack_require__("./src/app/races.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = AppComponent_1 = (function () {
    function AppComponent() {
        this.races = Array();
        if (!localStorage.getItem("karmaRoll")) {
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
        this.races = new __WEBPACK_IMPORTED_MODULE_1__races__["a" /* Races */]().races;
    }
    AppComponent.getItemByProperty = function (query, property, arr) {
        var outcome;
        for (var i in arr) {
            if (arr[i][property] === query) {
                outcome = arr[i];
            }
        }
        return outcome;
    };
    AppComponent.prototype.pickRace = function (name) {
        var race = AppComponent_1.getItemByProperty(name, "name", this.races);
        console.log(race);
    };
    return AppComponent;
}());
AppComponent = AppComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

var AppComponent_1;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_markdown__ = __webpack_require__("./node_modules/angular2-markdown/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Material Components




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_markdown__["a" /* MarkdownModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/races.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Races; });
var Races = (function () {
    function Races() {
        this.races = [
            // Human Race
            {
                name: "Human",
                stats: {
                    str: 10,
                    dex: 10,
                    int: 10,
                    wis: 10
                },
                karma: function (karmaRoll) {
                    console.log(karmaRoll);
                },
                luck: 5,
                background: "Humans have long been enemies of orcs, goblins, and trolls. They have been in an unending war with them for millennia and since every great library either side has ever built has been burned, they no longer know why they are even fighting. While the orcs and goblins live together and respect each other as close allies, the trolls never ally with either side, moving from their cold mountains to raid the farms and towns for food, and taking what they can.",
                racial: "* **Surprising ingenuity**: Any plans or creations of the humans are often strange to the minds of many other races, this makes them unpredictable. `+1` (up to 10) to any dice roll made.\n* **From father to son**:  Whatever job your father had, you now have the first 3 skills in that trade and `+10%` towards gaining skills in that area, whether or not it is your profession",
                img: "https://s-media-cache-ak0.pinimg.com/736x/5c/43/19/5c431990279695c525043326ac478b75.jpg"
            },
            // Orc Race
            {
                name: "Orc",
                stats: {
                    str: 15,
                    dex: 10,
                    int: 7,
                    wis: 12
                },
                luck: 5,
                karma: function (karmaRoll) {
                    console.log(karmaRoll);
                },
                background: "The Orcs have passed down the stories of their ancestors for millennia. In these stories, the innocents, those merely trying to eek out an existence are themselves and the Goblins, the invaders, Humans and Elves. The reason? They dislike them for their looks.  They are viewed as mindless uncaring monsters, primitive to the extreme. Creatures little better than roaches. That is their only reason for fighting, to protect themselves and their land. They spill human blood, but only because if they stopped, humans would spill their blood.",
                racial: "* **Strength of the ancestors**: using weapons with a history known to yourself gives them `+10%` damage.  Any weapon that is older than 1000 years, including those pieced back together, gain a power in accordance to their past.\n* If you are in a warrior profession gain `+1` strength per level without using points, this caps out at level 10, If you are a mage profession gain `+1` wisdom per level, this caps at level 10.",
                img: "http://img01.deviantart.net/0aaa/i/2015/204/6/8/orc_portrait_by_mirrors519-d92jmhe.jpg"
            },
            // Elf Race
            {
                name: "Elf",
                stats: {
                    str: 8,
                    dex: 15,
                    int: 13,
                    wis: 10
                },
                luck: 5,
                karma: function (karmaRoll) {
                    console.log(karmaRoll);
                },
                background: "The elven people have long despised the other races. They despise them for their short lives and lack of dedication to a profession.  Because of this, the elves often raid those around them, and slaughter any of those whom they come across as inferior beings should not exist. However, they especially despise the dwarves, because they create weapons and armor on par and sometimes exceeding those of the elves.  This has made them go to war and this war has not shown any sign of ending soon.",
                racial: "* **Focus and adherence**: You may only have 2 professions that you are studying at one time, however you gain `+10%` more experience towards skills in these areas.  These Professions must have some link and may not be opposite.\n* **Dispassionate gaze**: So ingrained is your distaste for those of other races, any of those who you glare at will feel a mental pressure and need to roll a `1d6` to resist fleeing.  This only works on those 2 levels lower than you and must not be above level 15",
                img: "/assets/elf.jpg"
            },
            // Goblin Race
            {
                name: "Goblin",
                stats: {
                    str: 6,
                    dex: 10,
                    int: 7,
                    wis: 8
                },
                luck: 5,
                karma: function () { return alert("HI"); },
                background: "The goblins care little for the troubles of those not of their people.  They work with the Orcs because they are stronger than they are, however they have been used as fodder in large scale battles by the Orcs.  Because of this, they have recently begun to hate them.  Now they work with them only for survival, and do not have much contact with them otherwise.  They despise the humans more for the burning of their farms now, then any past transgressions.  They have very short term and self centered desires leading them to have many children with many females.  They also love the all growing things, which is why they hate the humans for burning their farms.",
                racial: "* **Strength in numbers**: When in the company of other goblins you gain `+10%` to dexterity and +10% to critical strike chance.  This stacks up to `30%` (`10%` per goblin)\n* **Affinity for nature**: +10% towards any shamanic or druidic skills, `+10%` to crafting with living materials.",
                img: "http://pathfinderwiki.com/mediawiki/images/thumb/c/c0/Chuffy_Lickwound.jpg/250px-Chuffy_Lickwound.jpg"
            },
            // Troll Race
            {
                name: "Troll",
                stats: {
                    str: 17,
                    dex: 15,
                    int: 5,
                    wis: 3
                },
                luck: 5,
                karma: function () { return alert("HI"); },
                background: "Averaging 15ft tall, with arms reaching to their knees Trolls are terrifyingly strong and fast.  Trolls have their own language language and few among them learn to write.  However trolls do work metal.  Their creations, though crude, often have the weight of something several times the size.  This is because with the strength they have, they can pack far more metal into one space than one would think is possible.  Trolls also do not need to raid the other races, however they have an instinctual need to kill and eat the flesh of others.",
                racial: "* **Instinctual mayhem**: If you kill another sentient you will gain `+5%` damage and `+5%` health, this is stackable to `50%`.  If you do not kill another sentient every 3 days this buff will pass.\n* **Monstrous ability**: You gain `+2` strength and `+2` dexterity per level if you have killed 4 sentient beings within the last 5 days.  If you have not, you gain `+1` to whichever you wish to increase",
                img: "http://payload336.cargocollective.com/1/4/159162/9029856/RenderAngry_1078.jpg"
            },
            // Ogre Race
            {
                name: "Ogre",
                stats: {
                    str: 22,
                    dex: 10,
                    int: 3,
                    wis: 2
                },
                luck: 5,
                karma: function () { return alert("HI"); },
                background: "Ogres have no written language and care little for their past.  They do not tell stories of the past, but instead tell stories of their ancient gods.  However, this is all they tell of.  This also does not affect their lives much at all.  They tend to instead patrol the woods, eating everything they can so they can support their bulk.  They are rarely encountered by the other races, but when they are they are always in packs of 5-10.",
                racial: "* **True beast**:  You gain `+10` strength every 3 levels and `+2` dexterity every 5 levels.\n* **Scent of food**:  If you see a sentient being, you also pick out it’s scent among the many things in the area and can track them for the next 5 days.",
                img: "http://2.bp.blogspot.com/-ogJ9P43skZw/VqdL88UDUgI/AAAAAAAAJVU/ZacAKazpyws/s1600/13b23982688b7df6030e8cf04e55c84d.jpg"
            },
            // Demon Race
            {
                name: "Demon",
                stats: {
                    str: 15,
                    dex: 15,
                    int: 15,
                    wis: 4
                },
                luck: 5,
                karma: function () { return alert("HI"); },
                background: "Little is known about the demons other than that they are fallen angels. They are rare and never appear in groups.  They tend to be wandering beings of destruction, killing all in their way, burning villages. Some few sentients have managed to have conversations with these beings and they always come back changed in some way, twisted, and corrupted.",
                racial: "* **Chaos**:  Can change anything you touch in random and powerful ways.\n* **Blood creation**: If you kill something you can make weapons of it’s blood, these weapons are permanent creations and can be added to constantly by other blood. Each source of blood will change the weapon in some way.",
                img: "http://cdn.playbuzz.com/cdn/f4b6d7b3-4268-43a4-8a46-85e1697e218f/b229eb7d-48d8-414c-8bf4-0782a79c2e57.jpg"
            },
            // Angel Race
            {
                name: "Angel",
                stats: {
                    str: 15,
                    dex: 15,
                    int: 15,
                    wis: 4
                },
                luck: 10,
                karma: function () { return alert("HI"); },
                background: "Little is known of the angels other than that they are here to hunt the elder demons.  They rarely speak to sentients, and often kill those who they view as unclean.",
                racial: "* **Heavenly hunter**: You always know which way to go to find the nearest demon. You have a `+50%` damage boost towards demons\n* **Unending grace**: You are not affected by status effects",
                img: "http://d20pfsrd.opengamingnetwork.com/wp-content/uploads/sites/12/2017/01/angel-jr.png"
            },
            // Sprite Race
            {
                name: "Sprite",
                stats: {
                    str: 8,
                    dex: 7,
                    int: 8,
                    wis: 15
                },
                luck: 5,
                karma: function () { return alert("HI"); },
                background: "Sprites are guardians of all things natural. They often are found deep in the secret places of the world. They have a deep and ever expanding lore of the world. They are most often found in the woods, however they are also known to be on mountains, in tundra, and deep in the deserts.",
                racial: "* **Respectful creatures**:  Animals that are not naturally hostile will follow you and defend you from those who would attack you.  If you kill a non-hostile animal this ability will become void.\n* **Naturally cautious**: You keep constant vigilance of your surroundings and can see auras of danger, traps and creatures.",
                img: "http://orig14.deviantart.net/5921/f/2013/052/4/7/hommelstaub_by_d8p-d5vr6ci.jpg"
            },
            // Dwarf Race
            {
                name: "Dwarf",
                stats: {
                    str: 14,
                    dex: 7,
                    int: 15,
                    wis: 8
                },
                luck: 5,
                karma: function () { return alert("HI"); },
                background: "Deep underground, often under mountains, but also in the sands of the desert the dwarves reside.  Secluded and often wary of other races, they rarely trade with them.  They do not know why the elves attack them, they do not truly care either.  They care only for crafting, and now that they are at war, only for weapons.",
                racial: "* **Unparalleled Crafting**: All crafting skills increase `+10%` faster, all created objects will take on aspects of their material.\n* **Power of Creation**:  You can find simple ingredients in your environment, given time you can find the rarest ingredients in the area.",
                img: "https://3.bp.blogspot.com/-sxpEZsTLjMQ/WGBB7hkUDcI/AAAAAAAABtk/GFacmQE49lcpTpWeiQNNGzQYP7DPxYaaQCEw/s1600/f6daeede9b80e864d7d5e89ad6ca1710.png"
            },
            // Durg Race
            {
                name: "Durg",
                stats: {
                    str: 5,
                    dex: 6,
                    int: 25,
                    wis: 25
                },
                luck: 5,
                karma: function () { return alert("HI"); },
                background: "The Durg are are dark brown in color, hunched with clawed hands and bowed legs. They are a strictly magical people and are deeply into death magic.  Because of this they often reside in ancient catacombs, living off mushrooms and the dead scraps of meat on corpses.",
                racial: "* **Born to power**: `+35%` to all magical skills `-50%` to physical skills.\n* **Animator of the Dead**: Natural ability to control zombies, 1 per personal level, however their level in total cannot surpass yours. This ability is affected by magical skills in death magic.",
                img: "https://www.austinchronicle.com/binary/3c45/pols_reefer1.jpg"
            }
        ];
    }
    Races.prototype.getRaces = function () {
        return this.races;
    };
    return Races;
}());

//# sourceMappingURL=races.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map