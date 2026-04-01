import {Routes} from '@angular/router';
import {McCardsComponent} from './cards/mc-cards/mc-cards.component';
import {GameComponent} from "./game-component/game.component";
import {ViewerComponent} from './viewer-component/viewer.component';
import {McExpertGameComponent} from './game-component/expert-game/mc-expert-game.component';
import {McAllyGameComponent} from './game-component/ally-game/mc-ally-game.component';
import {AhCardsComponent} from './cards/ah-cards/ah-cards.component';
import {AhGameComponent} from './game-component/ah-game/ah-game.component';
import {McGameComponent} from './game-component/mc-game/mc-game.component';

export const routes: Routes = [
  {
    path: "cards",
    component: McCardsComponent
  },
  {
    path: "ah-cards",
    component: AhCardsComponent
  },
  {
    path: "viewer",
    component: ViewerComponent
  },
  {
    path: "expert",
    component: McExpertGameComponent
  },
  {
    path: "ally",
    component: McAllyGameComponent
  },
  {
    path: "ah",
    component: AhGameComponent
  },
  {
    path: "**",
    component: McGameComponent
  }
];
