
import { Component, Input, ViewChild} from '@angular/core';
import { CategoryHeadingIcon } from './heading-icon.component';


@Component({
    selector : 'category-heading',
    template : `
        <h4 id="category-heading" class="expanded" (click)="toggleCategory()">
            <category-heading-icon></category-heading-icon>
            {{heading}}
        </h4>
    `
})

export class CategoryHeading {
    @Input() heading : string;
    @ViewChild(CategoryHeadingIcon) icon : CategoryHeadingIcon;

    toggleCategory() {
        console.log('goggle category header');
        this.icon.switchIcon();
    }
}