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
      // (0-0.99)*10 =>0-9.9
      numberArray.push(Math.floor(Math.random()*100))
    }
    return numberArray
  }
}

