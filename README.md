# James's D&D Thing

This project was started with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## What is this?
This is an app I made to ease the creation and management of characters for the game.
In the future, I am also planning on adding a dashboard for the GM to see and edit anyone's characters, as well as make organized games.

## What's available now?
The app's in pre-alpha right now, but you can nearly make a character! Saving is still in the works, but it's getting there!

Here are some cool features:

### Character Creation
- Choose from 11 different races.
- Each race has perks and different starting stats.
- Customize your character's stats with 6 bonus points.

### Persistent Rolls
- The first time you launch the app, it will roll your karma and save it to prevent cheating.
- The roll is reset when you complete a character.

### Lots more coming soon!

## Tech Specs:
### Character Object:
```typescript
{
  name: string,
  race: string,
  stats: {
    str: number,
    dex: number,
    int: number,
    wis: number,
    luck: number
  },
  mod: {
    str: number,
    dex: number,
    int: number,
    wis: number,
    luck: number
  },
  racial: string,
  karma: number,
  // more coming later, like levels, weapon, etc.
}
```
### Race Object:
```typescript
{
  name: string,
  stats: {
    str: number,
    dex: number,
    int: number,
    wis: number,
    luck: number
  }
  karma: Function,
  background: string,
  racial: string
}
```
