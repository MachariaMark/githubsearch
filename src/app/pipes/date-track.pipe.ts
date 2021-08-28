import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTrack'
})
export class DateTrackPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
