import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameScreenComponent} from "./components/pages/game-screen/game-screen.component";
import {WelcomeScreenComponent} from "./components/pages/welcome-screen/welcome-screen.component";

const routes: Routes = [
  {path: 'game-screen', component: GameScreenComponent},
  {path: '', component: WelcomeScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
