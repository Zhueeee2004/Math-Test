import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  numbers = [6, 7, 8]
  title = 'math-test';

  ngOnInit(){
    this.numbers = this.getNumbers()
  }

  getNumbers () {
    let numberArray = []
    for( let i = 0; i < 10; i++) {
      // let random = Math.random()
      // numberArray.push(random)
      numberArray.push(Math.random())
    }
    return numberArray
  }
}

