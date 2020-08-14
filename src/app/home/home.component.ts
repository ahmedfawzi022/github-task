import { Component } from '@angular/core';

@Component({
  selector: 'git-home',
  template: `
<app-header></app-header> 

    <router-outlet></router-outlet>
  
  `,
})
export class HomeComponent {
}
