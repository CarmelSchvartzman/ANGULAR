////////  CLI : ng g p assets/pipes/name -m app.module -d

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if (gender.toLowerCase() === 'female') {
      return ' Mrs. ' + value;
    } else {
      return ' Mr. ' + value;
    }
  }

}

