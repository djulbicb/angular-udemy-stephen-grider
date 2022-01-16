import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value, args)

    if (!value) {
      return "";
    }

    const number = parseInt(value);
    if (isNaN(number)) {
      return "";
    }

    return number + args[1];
  }

}
