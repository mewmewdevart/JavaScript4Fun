import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = '02_practicingDatabinding';

  username: string = '';

  onFormSubmit(event: any) {
    event.preventDefault(); // Prevents page reload
  }

  resetUsername() {
    this.username = '';
  }
}
