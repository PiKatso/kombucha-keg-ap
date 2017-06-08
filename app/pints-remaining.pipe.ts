import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: 'pintsRemaining',
  pure: false
})

export class PintsRemainingPipe implements PipeTransform {
  transform(input: Keg[]) {
    let output: Keg[] = [];
    for (let keg of input) {
      if (keg.pints < 122) {
        output.push(keg);
      }
    }
    return output;
  }
}


// let output: Keg[] = [];
// for (let keg of input) {
//   if (keg.pints < 10) {
//     output.push(keg);
//   }
// }
// return output;
