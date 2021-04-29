import { Pipe, PipeTransform } from '@angular/core';
import * as jalali from 'jalaali-js';

@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    const jalaliDate = jalali.toJalaali(date);
    const str = `${jalaliDate.jy.toString().padStart(4, '0')}/${jalaliDate.jm.toString().padStart(2, '0')}/${jalaliDate.jd.toString().padStart(2, '0')}`;
    return str;
  }

}
