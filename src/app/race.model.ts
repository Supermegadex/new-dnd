export class Race {
  constructor (
    public name: string,
    public stats: {
      str: number,
      dex: number,
      int: number,
      wis: number
    },
    public luck: number,
    public background: string,
    public racial: string,
    public img: string
  ) {}
}
