import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleCounter';

  countNumber = 0;

  resetBtn()
  {
    this,this.countNumber = 0;
  }

  increaseBtn()
  {
    this.countNumber = this.countNumber + 1;
  }

  decreaseBtn()
  {
    this.countNumber = this.countNumber - 1;
  }
}
