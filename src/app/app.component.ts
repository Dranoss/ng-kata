import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  counter = 0;

  constructor(private counterService: CounterService){}

  ngOnInit(): void{
    const saveCounter = localStorage.getItem('counterValue');
    if(saveCounter){
      this.counter = parseInt(saveCounter, 10)
    }
    this.counterService.counterValue.subscribe((counterValue: number) => {
      this.counter = counterValue;
      this.saveChange(this.counter);
    });
  }

  saveChange(counterValue: number): void{
    localStorage.setItem('counterValue', counterValue.toString());
  }
}
