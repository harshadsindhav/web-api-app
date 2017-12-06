import { Pipe, PipeTransform } from '@angular/core';
import { ApiCategory, ApiEntry } from './models/category.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: any): any {
    console.log('filter pipe called');
    console.log(items);
    if(searchText == undefined) {
      return items;
    }
    console.log(items);
    /*return items.filter(function(item) {
        return item.toLowerCase().includes(searchText.toLowerCase());
    })*/
    return items.filter(function(api) {
      return api.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }


}
