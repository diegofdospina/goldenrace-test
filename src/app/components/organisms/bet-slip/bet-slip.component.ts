import {Component, OnInit} from '@angular/core';
import AppButonType from "../../atoms/app-button/app-button-typeenum";
import {RunningGameService} from "../../../services/running-game/running-game.service";

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {

  currentBallValue: number | undefined
  currentBetValue: number = 0;
  grayColor: AppButonType = AppButonType.Gray
  confirmColor: AppButonType = AppButonType.Confirm

  constructor(private runningGameService: RunningGameService) {
  }

  ngOnInit(): void {
  }

  showNumber = (number: number) => this.currentBallValue = number;

  removeSelection = () => this.currentBallValue = undefined;

  increase5 = () => this.modifyBetValue(5);
  decrease5 = () => this.modifyBetValue( -5);
  increase10 = () => this.modifyBetValue(10);
  increase20 = () => this.modifyBetValue(20);
  increase50 = () => this.modifyBetValue(50);
  increase100 = () => this.modifyBetValue(100);
  increase200 = () => this.modifyBetValue(200);
  increase500 = () => this.modifyBetValue(500);
  cleanBet = () => this.currentBetValue = 0;

  modifyBetValue = (modifier: number) => {
    if (this.currentBetValue + modifier >= 0) this.currentBetValue += modifier;
  }

  get canConfirmBet(): Boolean {
    return this.currentBetValue >= 5 && this.currentBallValue !== undefined
  }

  get isRunningGame(): Boolean {
    return this.runningGameService.isGameRunning;
  }

  confirmBet = () => this.runningGameService.runGame(this.currentBetValue, this.currentBallValue!!);

}
