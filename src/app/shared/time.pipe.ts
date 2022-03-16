import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    let h = Math.floor(value / 60);
    let m = value % 60;

    let runtime = `${h}h ${m}m`;
    
    return runtime;
  }

}
