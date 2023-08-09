import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = '03_practicingDirectives';

  details = false;
  word: string = '';

  showDetails(){
    this.details = true;
    this.word = "It is the details!";
  }

  log: number[] = [];
  onToggleDetails(){
    this.details = true;
    this.word = "It is the details!";

    this.log.push(this.log.length + 1);
  }
}
