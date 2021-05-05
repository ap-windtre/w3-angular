import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showJson'
})
export class ShowJsonPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return 'MIO JSON: ' + JSON.stringify(value, null, 2);
  }

}
