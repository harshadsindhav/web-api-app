

import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({ 
    selector: '[my-category-selector]' 
})
export class CategorySelection implements OnInit {
    @Input() mycolor : string;
    isSelected : boolean = true;
    constructor(private ref : ElementRef, private renderer : Renderer) {
        //this.renderer.addClass(this.hostElement.nativeElement, 'custom-theme');
    }

    ngOnInit() {
        /*console.log('Is selectd: ' + this.mycolor);
        if(this.isSelected) {
            this.renderer.setElementAttribute(this.ref.nativeElement, 'class', 'fa fa-angle-down');
        } else {
            this.renderer.setElementAttribute(this.ref.nativeElement, 'class', 'fa fa-angle-up');
        }
        this.isSelected = false;
        */
    }


}