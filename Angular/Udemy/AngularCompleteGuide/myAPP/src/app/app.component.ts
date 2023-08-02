import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.sass']
  styles: [`
  h1
    color: green
  `
]
})
export class AppComponent {
  title = 'myAPP';
}
