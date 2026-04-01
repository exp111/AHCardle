import {Component, computed} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {CardInfoAttribute} from '../card-info-attribute/card-info-attribute.component';
import {CardInfoComponent} from '../card-info.component';
import {McCardData} from '../../../../model/mcCardData';
import {arraysHaveSameValues, getMcCardImage, getMcFaction, getMcType, sortString} from '../../../helpers';

@Component({
  selector: 'app-mc-card-info',
  imports: [
    NgTemplateOutlet,
    CardInfoAttribute
  ],
  templateUrl: './mc-card-info.component.html',
  styleUrl: '../card-info.component.scss',
})
export class McCardInfoComponent extends CardInfoComponent<McCardData> {
  override cardImg = computed(() => getMcCardImage(this.card()));

  getCost(card: McCardData) {
    return (card.cost ?? "-").toString();
  }

  getType(card: McCardData) {
    return getMcType(card.type);
  }

  getFaction(card: McCardData) {
    return getMcFaction(card.faction);
  }

  hasAllResources() {
    return this.getResourceString(this.correctCard()) == this.getResourceString(this.card());
  }

  hasAnyResource() {
    return this.card().resources.some(r => this.correctCard().resources.includes(r));
  }

  getResourceString(card: McCardData) {
    return sortString(card.resources.join(""));
  }

  hasAllPacks() {
    return arraysHaveSameValues(this.card().packs, this.correctCard().packs);
  }

  hasAnyPack() {
    return this.card().packs.some(p => this.correctCard().packs.includes(p));
  }

  hasAllTraits() {
    return arraysHaveSameValues(this.card().traits, this.correctCard().traits);
  }

  hasAnyTrait() {
    return this.card().traits.some(t => this.correctCard().traits.includes(t));
  }
}
