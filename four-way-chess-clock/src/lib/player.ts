import { Clock } from './clock';
import { Observable } from 'rxjs';


export class Player {
  name: string;
  isPlaying: boolean = false;
  nextPlayer: Player;
  clock: Clock;
  

  init(name: string = "player", nextPlayer: Player, ticker: Observable<number>){
    this.name = name;
    this.nextPlayer = nextPlayer;
    this.clock = new Clock(ticker);
  } 

  next() {
    this.clock.stop();
    this.isPlaying = false;

    while(this.nextPlayer.clock.timeIsUp) {
        this.nextPlayer = this.nextPlayer.nextPlayer;
    }

    if (this.nextPlayer === this) return;

    this.nextPlayer.clock.start();
    this.nextPlayer.isPlaying = true;
    
  }

  toggleClock() {
    if (this.clock.isPaused) {
      this.clock.start()
      if (!this.isPlaying) this.isPlaying = true;
    } else {
      this.clock.stop();
    }
  }

}
