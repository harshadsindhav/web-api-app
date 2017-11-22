import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { ApiDocService} from './services/apidoc.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {STOREROUTES} from './routing';
import { FilterPipe } from './filter.pipe';
import { HomeResolver } from './components/home/home.resolver';
import { CategoryfilterPipe } from './custompipes/categoryfilter.pipe';
import { CategorySelection} from './directive/category-selection.directive';
import { CategoryHeading } from './components/category/heading.component';
import { CategoryHeadingIcon } from './components/category/heading-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    CategoryfilterPipe,
    CategorySelection,
    CategoryHeading,
    CategoryHeadingIcon
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(STOREROUTES)
  ],
  providers: [ApiDocService, HomeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

