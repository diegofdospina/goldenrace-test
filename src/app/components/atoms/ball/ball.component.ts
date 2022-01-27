import {Component, Input, OnInit} from '@angular/core';
import {RunningGameService} from "../../../services/running-game/running-game.service";

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent implements OnInit {

  @Input() value: String = "";
  @Input() onClickListener: Function = (value: Number) => {}
  @Input() large: Boolean = false;
  className: String = "ball";

  constructor(private runningGameService: RunningGameService) {
  }

  ngOnInit(): void {
    if (this.large) this.className += " xl";
  }

  onBallClickListener = () => {
    if (!this.runningGameService.isGameRunning) this.onClickListener(this.value);
  }

}
