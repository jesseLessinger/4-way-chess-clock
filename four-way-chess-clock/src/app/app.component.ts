import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { Player } from '../lib/player';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '4-Way Chess Clock';
  ticker: Observable<number>;

  player1: Player = new Player();
  player2: Player = new Player();
  player3: Player = new Player();
  player4: Player = new Player();
  currentPlayer: Player = this.player1;

  currentTurnIndex: number = 0;

  ngOnInit () {
   
    //start a ticker every 10th of a second.
    this.ticker = timer(0, 100);

    this.player1.init("player 1", this.player2, this.ticker);
    this.player2.init("player 2", this.player3, this.ticker);
    this.player3.init("player 3", this.player4, this.ticker);
    this.player4.init("player 1", this.player1, this.ticker);
 
  }

  playPause() {
    if (this.player1.isPlaying) this.player1.toggleClock();
    else if (this.player2.isPlaying) this.player2.toggleClock();
    else if (this.player3.isPlaying) this.player3.toggleClock();
    else if (this.player4.isPlaying) this.player4.toggleClock();
    else this.player1.toggleClock();
  }

 
}
