import {Component} from '@angular/core';
import {GuessInfoAttributeComponent} from '../guess-info-attribute/guess-info-attribute.component';
import {CardInfoComponent} from '../../card-info/card-info.component';
import {AhCardData} from '../../../../model/ahCardData';
import {GuessInfoComponent} from '../guess-info.component';
import {AhFilterType} from '../../ah-game/ah-game.component';
import {getAhCardImage} from '../../../helpers';

@Component({
  selector: 'app-ah-guess-info',
  imports: [
    GuessInfoAttributeComponent
  ],
  templateUrl: './guess-info.component.html',
  styleUrls: ['../../card-info/card-info.component.scss', '../guess-info.component.scss'],
})
export class AhGuessInfoComponent extends GuessInfoComponent<AhCardData, AhFilterType> {
  override getCardImage(card: AhCardData): string {
    return getAhCardImage(card);
  }
}
