export class Keg {
  tapped: boolean = null;
  pints: number = 124;
  constructor (public name: string, public brand: string, public flavor: string, public price: number) { }
}
