import {
  Component
} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  template: `
    <div id="sidebar">
        Sidebar will go here
    </div>
  `,
})
export class SidebarComponent {}

@Component({
  selector: 'app-article',
  template: `
    <div>
      Article list will go here
    </div>
  `,
})
export class ArticleComponent {}

@Component({ // Decorator: Function that accepts a function and decorates the class app component
  selector: 'app-root', // Defines what tag to render to
  template: `
    <div id="container">
      <app-sidebar></app-sidebar>
      <div id="content">
        <app-article></app-article>
        <app-article></app-article>
        <app-article></app-article>
        <app-article></app-article>
        <app-article></app-article>

      </div>
    </div>
  `,
})
export class AppComponent {
  
}
