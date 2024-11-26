import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

@component({
  selector:'menu',
  standalone: true,
  templateUrl:'./menu.component.html',
  styleUrl:'./menu.component.css'
})
export class MenuComponent{
  name = 'menu';
}

bootstrapApplication(App);