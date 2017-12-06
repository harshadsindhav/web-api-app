import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryfilter'
})
export class CategoryfilterPipe implements PipeTransform {


  transform(categories: any, searchText: any, subCategories : any): any {
    if(searchText.length == 0) {
      return categories;
    }
    let filteredCategories = [];
    for(let category of categories) {
      let categoryApis = [];
      for(let api of category.api_list){
        if(api.title.toLowerCase().includes(searchText.toLowerCase())) {
          categoryApis.push(api);
        }
      }
      if(categoryApis.length > 0) {
        category.api_list = categoryApis;
        filteredCategories.push(category);
      }
    }
    return filteredCategories;
  }
}
