import {  Component,Input } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <div>
    <h2>{{ article.title }}</h2>
      Article list will go here
    </div>
  `
})
export class ArticleComponent {
  @Input() article: Object;// tell angular we are expecting input on the article component
}
@Component({
  selector: 'app-sidebar',
  template: `
    <div id="sidebar">
        Sidebar will go here
    </div>
  `
})
export class SidebarComponent {}


@Component({ // Decorator: Function that accepts a function and decorates the class app component
  selector: 'app-root', // Defines what tag to render to
  template: `
    <div id="container">
      <app-sidebar></app-sidebar>
      <div id="content">
        <app-article
         [article]="article"></app-article>
       </div>
    </div>
  `
})
export class AppComponent {
  article: Object;
  // instance variable for article component
  constructor() {
      this.article = {
        title: 'The Angular 2 Book ',
        description: 'The  best way to learn Angular 2. '
      };
    } // first function to run is the constructor
}
