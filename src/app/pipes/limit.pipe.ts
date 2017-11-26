import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: any, args: number = 5): any {
    return value ? value.slice(0, args) : [];
  }

}
