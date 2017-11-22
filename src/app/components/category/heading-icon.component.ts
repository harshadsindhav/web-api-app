
import { Component, Input, ElementRef, Renderer } from '@angular/core';


@Component({
    selector : 'category-heading-icon',
    template : `
        <span></span>
    `
})

export class CategoryHeadingIcon {
    isSelected : boolean = true;
    constructor(private ref : ElementRef, private renderer : Renderer) {
        
    }

    switchIcon() {
        //this.ref.nativeElement.style.backgroundColor = 'red';
        if(this.isSelected) {
            this.renderer.setElementAttribute(this.ref.nativeElement, 'class', 'fa fa-angle-down');
        } else {
            this.renderer.setElementAttribute(this.ref.nativeElement, 'class', 'fa fa-angle-up');
        }
        this.isSelected = false;
    }

}