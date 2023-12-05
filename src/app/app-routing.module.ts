import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { PictureMatchComponent } from './picture-match/picture-match.component';
import { ChoiceGameComponent } from './choice-game/choice-game.component';
import { MadLibsComponent } from './mad-libs/mad-libs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tictactoe', component: TictactoeComponent },
  { path: 'picture-match', component: PictureMatchComponent },
  { path: 'choice-game', component: ChoiceGameComponent },
  { path: 'mad-libs', component: MadLibsComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
