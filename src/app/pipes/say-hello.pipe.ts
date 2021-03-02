import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sayHello'
})
export class SayHelloPipe implements PipeTransform {

  transform(value: string, param1?: string): unknown {
    return 'Ciao, ' + value.toUpperCase() + '! ' + (param1 || '');
  }

}
