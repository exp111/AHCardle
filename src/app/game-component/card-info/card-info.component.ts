import {booleanAttribute, Component, computed, input} from '@angular/core';
import {CardData, CardSkill} from '../../../model/cardData';
import {
  arraysHaveSameValues,
  getCardImage,
  getCardDBURL,
  getCardName,
  getFaction,
  getPack,
  getType,
  sortString
} from '../../helpers';
import {NgTemplateOutlet} from '@angular/common';
import {IS_DEV} from '../../const';
import {CardInfoAttribute} from './card-info-attribute/card-info-attribute.component';

@Component({
  selector: 'app-card-info',
  imports: [
    NgTemplateOutlet,
    CardInfoAttribute
  ],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss',
})
export class CardInfoComponent {
  card = input.required<CardData>();
  correctCard = input.required<CardData>();
  germanLanguage = input.required<boolean>();
  showBorder = input(true, {transform: booleanAttribute});
  showMarvelCDBLink = input(false);

  cardImg = computed(() => getCardImage(this.card()));

  getName(card: CardData) {
    return getCardName(card, this.germanLanguage());
  }

  getCost(card: CardData) {
    return (card.cost ?? "-").toString();
  }

  getXP(card: CardData) {
    return (card.xp ?? 0).toString();
  }

  getType(card: CardData) {
    return getType(card.type);
  }

  getFaction(card: CardData) {
    return getFaction(card.faction);
  }

  hasAllSkills() {
    return this.getSkillsString(this.correctCard()) == this.getSkillsString(this.card());
  }

  hasAnySkill() {
    return this.card().skills.some(r => this.correctCard().skills.includes(r));
  }

  getSkillsString(card: CardData) {
    return sortString(card.skills.join(""));
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

  protected readonly getPack = getPack;
  protected readonly getCardDBURL = getCardDBURL;
  protected readonly IS_DEV = IS_DEV;
  protected readonly CardSkill = CardSkill;
}
