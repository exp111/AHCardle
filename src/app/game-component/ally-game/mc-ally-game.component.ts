import {Component, computed} from '@angular/core';
import {GameComponent} from '../game.component';
import {FormsModule} from '@angular/forms';
import {NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {CustomDayComponent} from '../custom-day/custom-day.component';
import {McCardData, McCardType} from '../../../model/mcCardData';
import {map, Observable} from 'rxjs';
import {NgComponentOutlet} from '@angular/common';
import {AllyGuessInfoComponent} from './ally-guess-info/ally-guess-info.component';
import {AllyCardInfoComponent} from './ally-card-info/ally-card-info.component';
import {McGameComponent} from '../mc-game/mc-game.component';

@Component({
  selector: 'app-ally-game',
  imports: [
    FormsModule,
    NgbInputDatepicker,
    CustomDayComponent,
    NgComponentOutlet
  ],
  templateUrl: '../game.component.html',
  styleUrl: '../game.component.scss',
})
export class McAllyGameComponent extends McGameComponent {
  // consts
  override MODE = "ally";
  override LOCAL_STORAGE_DATA_KEY = `${this.MODE}_data`;
  override LOCAL_STORAGE_SCHEMA_VERSION_KEY = `${this.MODE}_schema_version`;
  override LOCAL_STORAGE_HELP_KEY = `${this.MODE}_help_shown`;

  // seed other than normal game as we operate on the same card pool
  override seed = computed(() => `${this.day()}-${this.MODE}`);

  override cardInfoComponent = AllyCardInfoComponent;
  override guessInfoComponent = AllyGuessInfoComponent;

  // only get allies
  override getData(): Observable<McCardData[]> {
    return super.getData().pipe(map(d => d.filter(c => c.type == McCardType.Ally)));
  }
}
