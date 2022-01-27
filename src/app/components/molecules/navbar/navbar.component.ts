import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RunningGameService} from "../../../services/running-game/running-game.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private runningGameService: RunningGameService
  ) {
  }

  ngOnInit(): void {
  }

  get isRunningGame(): Boolean {
    return this.runningGameService.isGameRunning;
  }

  goBack = () => {
    this.router.navigate([''], {replaceUrl: true});
  }

}
