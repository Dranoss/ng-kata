import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss']
})
export class UpComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }
  sendUpCount(){
    this.counterService.updateCounter('up');
  }
}
