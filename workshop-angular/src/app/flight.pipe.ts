import {Pipe, PipeTransform} from '@angular/core';
import {isUndefined} from 'util';

@Pipe({
  name: 'flightPipe',
  pure: false
})
export class FlightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (isUndefined(args) || args.length === 0) ? value : value.filter(x => {
      return new RegExp(`^${args}`, 'gi').test(x.flightName);
    });
  }

}
