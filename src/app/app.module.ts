import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameScreenComponent } from './components/pages/game-screen/game-screen.component';
import { AppButtonComponent } from "./components/atoms/app-button/app-button.component";
import { WelcomeScreenComponent } from './components/pages/welcome-screen/welcome-screen.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { BallComponent } from './components/atoms/ball/ball.component';
import { BallSelectorComponent } from './components/organisms/ball-selector/ball-selector.component';
import { BetSlipComponent } from './components/organisms/bet-slip/bet-slip.component';
import { GameHolderComponent } from './components/organisms/game-holder/game-holder.component';
import {RunningGameService} from "./services/running-game/running-game.service";

@NgModule({
    declarations: [
        AppComponent,
        GameScreenComponent,
        AppButtonComponent,
        WelcomeScreenComponent,
        NavbarComponent,
        LogoComponent,
        BallComponent,
        BallSelectorComponent,
        BetSlipComponent,
        GameHolderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RunningGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
