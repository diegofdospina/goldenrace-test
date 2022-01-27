import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  subtitle = 'Prueba juego de azar';
  author = 'Diego Ospina Tobon - Colombia'

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  goToGameScreen = () => {
    this.router.navigate(['game-screen'], {replaceUrl: true});
  }

}
