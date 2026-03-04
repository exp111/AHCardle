import {Component, computed, input} from '@angular/core';
import {getFaction} from "../../../helpers";
import {CardData} from '../../../../model/cardData';

@Component({
  selector: 'card-info-attribute',
  imports: [],
  templateUrl: './card-info-attribute.component.html',
  styleUrl: './card-info-attribute.component.scss',
})
export class CardInfoAttribute {
  card = input.required<CardData>();
  correctCard = input<CardData>();
  field = input.required<keyof CardData>();
  isNumber = input<boolean>(false);
  displayFunc = input<(c: CardData) => string>((c: CardData) => c[this.field()]!.toString());
  name = input.required<string>();

  displayValue = computed(() => this.displayFunc()(this.card()));

  answerIsHigher(val?: number, correct?: number) {
    // nothing lower than null (-)
    if (correct == null) {
      return false;
    }

    // higher if val not null
    if (val == null) {
      return true;
    }

    // otherwise if lower
    return val < correct;
  }

  answerIsLower(val?: number, correct?: number) {
    // nothing lower than null (-)
    if (val == null) {
      return false;
    }

    // higher if val not null
    if (correct == null) {
      return true;
    }

    // otherwise if higher
    return val > correct;
  }
}
