export class Keg {
  tapped: boolean = null;
  constructor (public name: string, public brand: string, public flavor: string, public price: number, public pints: number) { }
}
