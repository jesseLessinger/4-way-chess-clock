
import { Observable, Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core'

export class Clock {
  
  
  minutes: number = 10;
  seconds: number = 0;
  tenths: number = 0;
  isPaused: boolean = true;
  timeIsUp: boolean = false;
  ticker: Observable<number>
  clockSub: Subscription;
  timeUpEmitter: EventEmitter<boolean>;
  
  constructor (ticker: Observable<number>){
    this.ticker = ticker;
  }

  tick() {
  
    if (this.tenths === 0) {
      if (this.seconds > 0) this.seconds--;
      else {
        if (this.minutes === 0) {
          console.log('times up!')
          this.stop();
          this.timeIsUp = true;
          this.timeUpEmitter.emit(true);
          return;
        } else {
          this.seconds = 59;
          this.minutes--;
        }
      }
      this.tenths = 10;
    }
    this.tenths--;
 

  }

  start() {
    if (this.isPaused) {
      this.clockSub = this.ticker.subscribe(() => this.tick());
      this.isPaused = false;
    }
  }
  
  stop() {
    if (!this.isPaused && this.clockSub) {
      this.clockSub.unsubscribe();
      this.isPaused = true;
    }
  }


}