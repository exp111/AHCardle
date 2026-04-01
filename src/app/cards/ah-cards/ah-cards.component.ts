import {Component} from '@angular/core';
import {AhCardData} from '../../../model/ahCardData';
import {AbstractCardsComponent} from '../cards.component';

@Component({
  selector: 'app-ah-cards',
  imports: [],
  templateUrl: './ah-cards.component.html'
})
export class AhCardsComponent extends AbstractCardsComponent<AhCardData> {
  override getData() {
    return this.dataService.getAHData();
  }
}
