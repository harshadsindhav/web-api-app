import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryfilter'
})
export class CategoryfilterPipe implements PipeTransform {

  transform(items: any, test: any, searchText: any): any {
    console.log(searchText);
    if(searchText == undefined) {
      return items;
    }

   return items.filter(function(item) {
      console.log(item.category);
      return item.category.toLowerCase().includes(searchText.toLowerCase());
   })
  }

}
