import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: 'tappedness',
  pure: false
})

export class TappednessPipe implements PipeTransform {
  transform(input: Keg[], desiredTappednessSearch) {
    let output: Keg[] = [];
    if (desiredTappednessSearch == "tapped") {
      for (let keg of input) {
        if (keg.tapped == true) {
          output.push(keg);
        }
      }
      return output;
    } else if (desiredTappednessSearch == "untapped") {
      for (let keg of input) {
        if (keg.tapped == null) {
          output.push(keg);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
