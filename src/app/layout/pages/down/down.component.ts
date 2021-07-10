import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.scss']
})
export class DownComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  sendDownCount(){
    this.counterService.updateCounter('down');
  }

}
