import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RunningGameService {

  isGameRunning: boolean = false;
  currentBetValue: number = 0;
  currentBallValue: number = 0;

  gameRunningStateChange: Subject<boolean> = new Subject<boolean>();
  gameBetValueChange: Subject<number> = new Subject<number>();
  gameBallValueChange: Subject<number> = new Subject<number>();

  constructor() {
    this.gameRunningStateChange.subscribe((value) => {
      this.isGameRunning = value
    });

    this.gameBetValueChange.subscribe((value) => {
      this.currentBetValue = value
    });

    this.gameBallValueChange.subscribe((value) => {
      this.currentBallValue = value
    });
  }

  runGame = (betValue: number, ballValue: number) => {
    this.gameBetValueChange.next(betValue);
    this.gameBallValueChange.next(ballValue);
    this.gameRunningStateChange.next(true);
  }

  stopGame = () => {
    this.gameBetValueChange.next(0);
    this.gameBallValueChange.next(0);
    this.gameRunningStateChange.next(false);
  }

}
