import { Component } from '@angular/core';

@Component({
  selector: 'auth',
  styles: ['body { background-color: #e1e4e8; }'],

  template: `
    <router-outlet class="body-home"></router-outlet>
  `,
})

export class AuthComponent {
}
