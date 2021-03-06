import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0;
  actionNumber = 0;
  // Here we use a Subject to get data on realtime stream to detect changes whenever they occur in the app
  counterValue: Subject<number> = new Subject<number>();

  constructor() {
    const savedActionNumber = localStorage.getItem('actionNumber');
    const counterSaved = localStorage.getItem('counterValue');
    if(savedActionNumber){
      this.actionNumber = parseInt(savedActionNumber, 10);
    }
    if(counterSaved){
      this.counter = parseInt(counterSaved, 10);
    }
  }

  updateCounter(value: string): void{
    if(value === 'up'){
      this.counterUp();
    }
    if(value === 'down'){
      this.counterDown();
    }
    this.actionNumber++;
    this.saveActionNumber();
  }

  // We use the localStorage to persist data even if user refreshes the app on browser
  saveActionNumber(): void{
    localStorage.setItem('actionNumber', this.actionNumber.toString())
  }

  // Despite de increment/decrement function, I added a condition to multiply incrementation (or decrementation)
  // by 2, 4, 8 every 30, 60, 120 ... clicks, is makes things funnier :p
  counterUp(): void{
    let x = Math.trunc(this.actionNumber/30);
    if(x === 0){
      this.counter++;
    }
    if(x > 0){
      this.counter += x*2;
    }

    this.counterValue.next(this.counter)
  }

  counterDown(): void{
    let x = Math.trunc(this.actionNumber/30);
    if(x === 0){
      this.counter--;
    }
    if(x > 0){
      this.counter -= x*2;
    }
    this.counterValue.next(this.counter)
  }

  // here we reset the counter AND the actionNumber by sending the new value of counter to the observable stream
  // and clearing the localStorage to restart the actionNumber value that was stored there
  counterReset(): void{
    this.counter = 0;
    this.actionNumber = 0;
    this.counterValue.next(this.counter);
    localStorage.clear();
  }

}
