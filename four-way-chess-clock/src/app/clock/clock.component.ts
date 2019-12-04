import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import { CountdownConfig, CountdownComponent, CountdownGlobalConfig } from 'ngx-countdown';
// import { SimpleTimer } from 'ng2-simple-timer';
import { Player } from "../../lib/player"





@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }
  
  @Input() player: Player;
  resetMin: string = '10';
  resetSec: string = '0';

  timeUpEmitter = new EventEmitter<boolean>();


  ngOnInit() {
    this.player.clock.timeUpEmitter = this.timeUpEmitter;
    this.timeUpEmitter.subscribe(()=>{
      this.player.next();
    })
  }

  
  handleClick() {
    if (!this.player.clock.isPaused) {
      this.player.next();
      
    }
  }

  reset(min: string, sec: string) {
    if (this.player.clock.isPaused) {
      this.player.clock.minutes = parseInt(min);
      this.player.clock.seconds = parseInt(sec);
    }
  }
 
}
