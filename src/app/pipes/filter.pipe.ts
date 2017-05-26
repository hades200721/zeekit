import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // change to false with cuation
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    value.forEach(element => {
      let match = true;
      for (const prop in filterString) {
        if (filterString[prop] === '') { break; }
        if (element[prop].constructor === Array) {
          let langsAsString = element[prop].map(con => con.name).join('');
          if (langsAsString.indexOf(filterString[prop]) === -1) {
            match = false;
            break;
          }
        } else {
          if (element[prop] !== filterString[prop]) {
            match = false;
            break;
          }
        }
      }
      if (match) {
        resultArray.push(element);
      }
    });
    return resultArray;
  }

}
