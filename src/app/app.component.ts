import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mynewapp';

  hello = {};

  constructor(
    private apiService: ApiService
  ) {

  }

  getHello() {
    this.apiService.getHello().subscribe(
      res => this.hello = res
    );
  }
}
