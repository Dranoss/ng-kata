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

  counterUp(): void{
    this.counter++;
    this.counterValue.next(this.counter)
  }

  counterDown(): void{
    this.counter--;
    this.counterValue.next(this.counter)
  }

}
