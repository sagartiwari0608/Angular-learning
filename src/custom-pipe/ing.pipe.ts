import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ing'
})
export class IngPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value +'ing';
  }

}
