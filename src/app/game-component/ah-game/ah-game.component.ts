import {Component} from '@angular/core';
import {GameComponent} from '../game.component';
import {FormsModule} from '@angular/forms';
import {NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {CustomDayComponent} from '../custom-day/custom-day.component';
import {NgComponentOutlet} from '@angular/common';
import {AhCardData, AhCardDataArrayField, AhCardSkill} from '../../../model/ahCardData';
import {AhCardInfoComponent} from './ah-card-info/ah-card-info.component';
import {AhGuessInfoComponent} from './ah-guess-info/ah-guess-info.component';
import {AhSuccessModalComponent} from '../success-modal/ah-success-modal.component';
import {arraysHaveSameValues, getAhCardImage, getAhFaction, sortString} from '../../helpers';

export type AhFilterType =
  keyof AhCardData
  | "firstLetter"
  | "allSkills"
  | "anySkill"
  | "allTraits"
  | "anyTrait"
  | "allPacks";

@Component({
  selector: 'app-ah-game',
  imports: [
    FormsModule,
    NgbInputDatepicker,
    CustomDayComponent,
    NgComponentOutlet
  ],
  templateUrl: '../game.component.html',
  styleUrl: '../game.component.scss'
})
export class AhGameComponent extends GameComponent<AhCardData, AhFilterType> {
  // consts
  override MODE = "ah";
  override LOCAL_STORAGE_DATA_KEY = `${this.MODE}_data`;
  override LOCAL_STORAGE_SCHEMA_VERSION_KEY = `${this.MODE}_schema_version`;
  override LOCAL_STORAGE_HELP_KEY = `${this.MODE}_help_shown`;

  //TODO: fix these components
  override cardInfoComponent = AhCardInfoComponent;
  override guessInfoComponent = AhGuessInfoComponent;
  override successModalType = AhSuccessModalComponent;

  override matchesFilter(card: AhCardData): boolean {
    let filter = this.filter();
    if (!filter?.length) {
      return true;
    }

    for (let criterium of filter) {
      // for arrays check if the value is contained in the array
      if (criterium.array) {
        if (!(card[criterium.filter as AhCardDataArrayField] as any[]).includes(criterium.value)) {
          return false;
        }
        continue;
      }

      // custom filters
      switch (criterium.filter) {
        case 'firstLetter':
          if (this.getName(card)[0] != criterium.value) {
            return false;
          }
          break;
        case 'allSkills':
          if (sortString(card.skills.join("")) != criterium.value) {
            return false;
          }
          break;
        case 'anySkill':
          if (!criterium.value.every((s: AhCardSkill) => card.skills.includes(s))) {
            return false;
          }
          break;
        case 'allPacks':
          if (!arraysHaveSameValues(card.packs, criterium.value)) {
            return false;
          }
          break;
        case 'allTraits':
          if (!arraysHaveSameValues(card.traits, criterium.value)) {
            return false;
          }
          break;
        case 'anyTrait':
          if (!criterium.value.every((t: string) => card.traits.includes(t))) {
            return false;
          }
          break;
        default:
          // default: just check if the field equals the value
          if (card[criterium.filter] != criterium.value) {
            return false;
          }
          break;
      }
    }
    return true;
  }

  override getFaction(card: AhCardData) {
    return getAhFaction(card.faction);
  }

  override getCardImage(card: AhCardData): string {
    return getAhCardImage(card);
  }

  override getData() {
    return this.dataService.getAHData();
  }
}
