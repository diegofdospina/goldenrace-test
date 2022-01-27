import {Component, OnInit, ViewChild} from '@angular/core';
import {BetSlipComponent} from "../../organisms/bet-slip/bet-slip.component";
import {RunningGameService} from "../../../services/running-game/running-game.service";

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {

  @ViewChild("betSlipComponent") betSlipComponent: BetSlipComponent | undefined

  constructor(private runningGameService: RunningGameService) {
  }

  ngOnInit(): void {
  }

  get gameNotRunningClass(): String {
    return this.runningGameService.isGameRunning ? "hidden" : "";
  }

  get gameRunningClass(): String {
    return this.runningGameService.isGameRunning ? "" : "hidden";
  }

  onBallSelectedListener = (ballValue: number) => {
    this.betSlipComponent!!.showNumber(ballValue);
  }

}
