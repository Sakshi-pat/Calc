import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calc';
  num1 = 0;
  num2 = 0;
  result = 0;
  add()
  {
    this.result=this.num1+this.num2;
  }
  sub()
  {
    this.result=this.num1-this.num2;
  }
  mult()
  {
    this.result=this.num1*this.num2;
  }
  div()
  {
    this.result=this.num1/this.num2;
  }
  mod()
  {
    this.result=this.num1%this.num2;
  }
}
