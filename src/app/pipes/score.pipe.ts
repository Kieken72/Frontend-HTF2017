import { Pipe, PipeTransform } from '@angular/core';
import { FullTeam } from '../models/fullteam';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(array: FullTeam[], args?: any): any {
    if (!array) {
      return array;
    }
    array.sort((a: FullTeam, b: FullTeam) => {
      return b.score - a.score;
    });
    return array;
  }

}
