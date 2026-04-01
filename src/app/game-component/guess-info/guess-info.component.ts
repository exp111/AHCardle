import {Component, computed, input, model} from '@angular/core';
import {CardInfoComponent} from '../card-info/card-info.component';
import {McCardDataArrayField, McCardResource, McPack} from '../../../model/mcCardData';
import {arraysHaveSameValues, getCardName} from '../../helpers';
import {Filter} from '../game.component';
import {PLACEHOLDER_IMAGE} from '../../const';
import {McFilterType} from '../mc-game/mc-game.component';
import {CardData} from '../../../model/cardData';

@Component({template: ''})
export abstract class GuessInfoComponent<T extends CardData, F> {
  correctCard = input.required<T>();
  guesses = input.required<T[]>();
  filter = model.required<Filter<F>[]>();
  germanLanguage = input.required<boolean>();

  cardGuessed = computed(() => this.guesses().includes(this.correctCard()));

  cardNameParts = computed(() => this.getName(this.correctCard()).split(" "));
  guessedWords = computed(() => this.guesses().flatMap(g => this.getName(g).toLowerCase().split(" ")));
  guessNameParts = computed(() => this.cardNameParts().map(p => this.guessedWords().includes(p.toLowerCase()) ? p : this.PLACEHOLDER));

  PLACEHOLDER = "???";

  shouldShowPlaceholderImage = computed(() => !this.cardGuessed());
  cardImg = computed(() => this.shouldShowPlaceholderImage() ? PLACEHOLDER_IMAGE : this.getCardImage(this.correctCard()));

  abstract getCardImage(card: T): string;

  getName(card: T) {
    return getCardName(card, this.germanLanguage());
  }

  getFilterIndex(field: string, value?: unknown) {
    return this.filter().findIndex(f => f.filter == field && (!value || value == f.value));
  }

  removeFilterIfOn(field: string, value?: unknown) {
    let index = this.getFilterIndex(field, value);
    if (index < 0) {
      return false;
    }
    // remove index from filter
    this.filter.update(f => f.filter((_, i) => i !== index));
    return true;
  }

  hasFilter(field: string, value?: unknown) {
    return this.getFilterIndex(field, value) >= 0;
  }

  setFilter(field: keyof T) {
    // don't set filter if card was already guessed
    if (this.cardGuessed()) {
      return;
    }
    // check if not guessed yet
    if (!this.hasValue(field)) {
      return;
    }
    // toggle filter if already on
    if (this.removeFilterIfOn(field)) {
      return;
    }
    // add to filter
    this.filter.update(f => [...f, {
      filter: field,
      value: this.correctCard()[field],
      array: false
    }]);
  }

  setFilterCustom(field: McFilterType, value?: any) {
    // don't set filter if card was already guessed
    if (this.cardGuessed()) {
      return;
    }
    // check if not guessed yet
    switch (field) {
      case "firstLetter":
        if (!this.hasFirstLetter()) {
          return;
        }
        break;
      case "allResources":
        if (!this.hasAllResources()) {
          return;
        }
        value = this.getResourceString(this.correctCard());
        break;
      case "anyResource":
        if (!this.hasAnyResource()) {
          return;
        }
        value = this.correctCard().resources
          .filter(r => this.hasResource(r))
          .filter((r,i,s) => s.indexOf(r) === i); // unique
        break;
      case "allPacks":
        if (!this.hasAllPacks()) {
          return;
        }
        value = this.correctCard().packs;
        break;
      case "allTraits":
        if (!this.hasAllTraits()) {
          return;
        }
        value = this.correctCard().traits;
        break;
      case "anyTrait":
        if (!this.hasAnyTrait()) {
          return;
        }
        value = this.correctCard().traits.filter(t => this.hasTrait(t));
        break;
      default:
        console.error(`Unknown filter: ${field}`);
        return;
    }

    // toggle filter if already on
    if (this.removeFilterIfOn(field)) {
      return;
    }
    // add to filter
    this.filter.update(f => [...f, {
      filter: field,
      value: value,
      array: false
    }]);
  }

  setFilterArray(field: McCardDataArrayField, value: any) {
    // don't set filter if card was already guessed
    if (this.cardGuessed()) {
      return;
    }
    // not guessed yet
    if (!this.hasValueArray(field as any, value as never)) {
      return;
    }
    // extra check for packs to have all packs guessed
    if (field == "packs" && !this.hasAllPacks()) {
      return;
    }
    // toggle filter if already on
    if (this.removeFilterIfOn(field, value)) {
      return;
    }
    // add to filter
    this.filter.update(f => [...f, {
      filter: field,
      value: value,
      array: true
    }]);
  }

  hasValue(field: keyof T) {
    let correct = this.correctCard()[field];
    return this.guesses().some(g => g[field] === correct);
  }

  hasValueArray(field: A, value: never) {
    return this.guesses().some(g => g[field].includes(value));
  }

  hasFirstLetter() {
    let name = this.getName(this.correctCard());
    return this.guesses().some(g => this.getName(g)[0] == name[0]);
  }
}
