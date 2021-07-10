import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  counter = 0;
  conditionColor = 'white';

  constructor(private counterService: CounterService){}

  ngOnInit(): void{
    const saveCounter = localStorage.getItem('counterValue');
    if(saveCounter){
      this.counter = parseInt(saveCounter, 10)
    }
    this.counterService.counterValue.subscribe((counterValue: number) => {
      this.counter = counterValue;
      this.saveChange(this.counter);
      this.changeBackgroundColor();
    });
  }

  saveChange(counterValue: number): void{
    localStorage.setItem('counterValue', counterValue.toString());
  }

  changeBackgroundColor(): void{
    if(this.counter == 0){
      this.conditionColor = 'white';
    }
    if(this.counter >= 10){
      this.conditionColor = '#a23ce7';
    }
    if(this.counter <= -10){
      this.conditionColor = '#d7e73c';
    }
}
}
