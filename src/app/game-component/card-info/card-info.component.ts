import {booleanAttribute, Component, input, Signal} from '@angular/core';
import {getCardName, getMcCardDBURL, getMcPack} from '../../helpers';
import {NgTemplateOutlet} from '@angular/common';
import {IS_DEV} from '../../const';
import {CardInfoAttribute} from './card-info-attribute/card-info-attribute.component';
import {CardData} from '../../../model/cardData';

@Component({
  selector: 'app-card-info',
  imports: [
    NgTemplateOutlet,
    CardInfoAttribute
  ],
  templateUrl: './mc-card-info.component.html',
  styleUrl: './card-info.component.scss',
})
export abstract class CardInfoComponent<T extends CardData> {
  card = input.required<T>();
  correctCard = input.required<T>();
  germanLanguage = input.required<boolean>();
  showBorder = input(true, {transform: booleanAttribute});
  showMarvelCDBLink = input(false);

  abstract cardImg: Signal<string>;

  getName(card: T) {
    return getCardName(card, this.germanLanguage());
  }

  protected readonly getPack = getMcPack;
  protected readonly getCardMarvelCDBURL = getMcCardDBURL;
  protected readonly IS_DEV = IS_DEV;
}
