
import { Component, OnInit, ElementRef, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {Observable } from 'Rxjs/Rx';
import {ActivatedRoute} from '@angular/router';
import {FilterPipe}  from './../../../app/filter.pipe';
import {  Http, ResponseContentType } from '@angular/http';
import { ApiCategory } from '../../models/category.model';
import { DomSanitizer } from '@angular/platform-browser';
declare var $:any;

declare var jQuery : any;

@Component ({
    moduleId: module.id,
    'selector' : 'home',
    templateUrl : 'home.component.html',
    styleUrls : ['home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
    apiCategories : any;
    searchtext : string = "";
    iframeurl : string ="../../assets/Find details of facilities.html";
    myurl : any;
    categoryExpanded : boolean = true;

    constructor(private senitizer : DomSanitizer, private route : ActivatedRoute, private eleRef : ElementRef) {
        this.myurl = this.getSafeURL(this.iframeurl);
        this.apiCategories = this.route.snapshot.data['apiListing'];
    }

    ngOnInit() {

    }
    test(event : any) {
        var targetApiTitle = event.target.innerHTML;
        if(targetApiTitle) {
            targetApiTitle = targetApiTitle.trim();
            this.myurl = this.getSafeURL("../../assets/" + targetApiTitle + ".html");
            $(this.eleRef.nativeElement).find('p').each(function() {
                var that = $(this);
                that.removeClass("selected");
            });
        }
        event.target.classList.add('selected');

    }

    getSafeURL(url : string) {
        return this.senitizer.bypassSecurityTrustResourceUrl(url);
    }

    getApiUrl(title : string, categories : any) : string {
        console.log("title : "  + title);
        console.log("categories : " + categories.category);
        if(categories){
            var api_list = categories.api_list;
            if(api_list && api_list.length > 0) {
                for(let api of api_list) {
                    var api_title = api.title.trim();
                    if(api_title == title) {
                        console.log(api_title);
                        return "/" + categories.category;
                    } else {
                        return null;
                    }
                }
            }
            if(categories.sub_categories && categories.sub_categories.length > 0) {
                for(let subcategory of categories.sub_categories) {
                    var value = this.getApiUrl(title, subcategory);
                    if(value != null) {
                        return "/"+ categories.category + value;
                    }
                }
            }

        }

        return null;
    }

    ngAfterViewInit() {
      console.log('After view init called');
        $(this.eleRef.nativeElement).find('li.root-category').each(function() {
            let that = $(this);
            let header = that.children('h4');
            let body = that.children('ul');
            let arrowIcon = header.children('span');
            if(header.hasClass('collapsed')) {
                body.slideUp('slow');
            } else {
                body.slideDown('slow');
            }
            header.click(function() {
                //body.hide();
                header.toggleClass('expanded').toggleClass('collapsed');
                arrowIcon.toggleClass('fa fa-angle-up').toggleClass('fa fa-angle-down');
                if(header.hasClass('collapsed')) {
                    body.slideUp('slow');
                } else {
                    body.slideDown('slow');
                }
            });
        });

        $(this.eleRef.nativeElement).find('li.component-category').each(function(){
          let that = $(this);
          let header = that.children('h4');
          let body = that.children('ul');
          let arrowIcon = header.children('span');
          if(header.hasClass('collapsed')) {
            body.slideUp('slow');
          } else {
            body.slideDown('slow');
          }
          header.click(function() {
            header.toggleClass('expanded').toggleClass('collapsed');
            arrowIcon.toggleClass('fa fa-angle-down').toggleClass('fa fa-angle-up');
            if(header.hasClass('collapsed')) {
              body.slideUp('slow');
            } else {
              body.slideDown('slow');
            }
          });
        });
    }

    categoryToggled() {
        let that = $(this);
        let header = that.children('h4');
        let body = that.children('ul');
        let arrowIcon = header.children('span');
        header.toggleClass('expanded').toggleClass('collapsed');
        arrowIcon.toggleClass('fa fa-angle-down').toggleClass('fa fa-angle-up');
        $(body).each(function() {
          console.log('test');
          let headerItem = $(this);
          let bodyItem = headerItem.children('ul');
          if(headerItem.hasClass('collapsed')) {
            bodyItem.slideUp('slow');
          } else {
            bodyItem.slideDown('slow');
          }
        });

    }

    onSearch() {
        if(this.searchtext && this.searchtext.length > 0) {
            $(this.eleRef.nativeElement).find('li').each( function() {
                var that = $(this);
                var header = that.children('h4');
                var body = that.children('ul');
                body.slideDown('slow');
                /*if(body.length == 0) {
                    that.hide();
                } else {
                    body.slideDown('slow');
                }*/
            });
        } else {
          this.ngAfterViewInit();
        }
    }
}
