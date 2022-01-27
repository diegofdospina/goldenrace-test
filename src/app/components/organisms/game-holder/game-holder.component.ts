import {Component, OnInit} from '@angular/core';
import {RunningGameService} from "../../../services/running-game/running-game.service";
import AppButonType from "../../atoms/app-button/app-button-typeenum";

@Component({
  selector: 'app-game-holder',
  templateUrl: './game-holder.component.html',
  styleUrls: ['./game-holder.component.scss']
})
export class GameHolderComponent implements OnInit {

  currentValue: number = 1;
  prizeValue: number | undefined;
  confirmType: AppButonType = AppButonType.Confirm;

  constructor(private runningGameService: RunningGameService) {
  }

  ngOnInit(): void {
    this.runningGameService.gameRunningStateChange.subscribe((isGameRunning: Boolean) => {
      if (isGameRunning) {
        this.prizeValue = undefined;
        const randomAnimation = setInterval(this.printRandomNumber, 50);

        setTimeout(() => {
          clearInterval(randomAnimation);
          this.printRandomNumber();
          this.validateResult();
        }, 5000);
      }
    });
  }

  printRandomNumber = () => this.currentValue = Math.floor(Math.random() * (10 - 1 + 1) + 1);

  validateResult = () => {
    if (this.currentValue == this.runningGameService.currentBallValue) {
      this.prizeValue = this.runningGameService.currentBetValue * 1.5;
    } else {
      this.prizeValue = 0;
    }
  }

  resetGame = () => {
    this.runningGameService.stopGame();
  }

}
