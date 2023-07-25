import { Component } from '@angular/core';

export const environment = {
  apiUrl: 'http://localhost:4000',
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login';
}
