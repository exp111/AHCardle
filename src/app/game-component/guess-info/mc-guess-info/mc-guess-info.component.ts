import {Component} from '@angular/core';
import {GuessInfoAttributeComponent} from '../guess-info-attribute/guess-info-attribute.component';
import {GuessInfoComponent} from '../guess-info.component';
import {McCardData, McCardResource, McPack} from '../../../../model/mcCardData';
import {McFilterType} from '../../mc-game/mc-game.component';
import {arraysHaveSameValues, getMcCardImage, getMcFaction, getMcPack, getMcType, sortString} from '../../../helpers';

@Component({
  selector: 'app-mc-guess-info',
  imports: [
    GuessInfoAttributeComponent
  ],
  templateUrl: './mc-guess-info.component.html',
  styleUrls: ['../../card-info/card-info.component.scss', '../guess-info.component.scss'],
})
export class McGuessInfoComponent extends GuessInfoComponent<McCardData, McFilterType> {
    override getCardImage(card: McCardData): string {
        return getMcCardImage(card);
    }

  getCost(card: McCardData) {
    return (card.cost ?? "-").toString();
  }

  getType(card: McCardData) {
    return getMcType(card.type);
  }

  getFaction(card: McCardData) {
    return getMcFaction(card.faction);
  }

  getPack(pack: McPack) {
      return getMcPack(pack);
  }

  getResourceString(card: McCardData) {
    return sortString(card.resources.join(""));
  }

  hasAllResources() {
    let resourceString = this.getResourceString(this.correctCard());
    return this.guesses().some(g => this.getResourceString(g) == resourceString);
  }

  hasAnyResource() {
    return this.correctCard().resources.some(r => this.hasResource(r));
  }

  hasResource(resource: McCardResource) {
    return this.hasValueArray("resources", resource as never);
  }

  hasPack(pack: McPack) {
    return this.hasValueArray("packs", pack as never);
  }

  hasAllPacks() {
    return this.guesses().some(g => arraysHaveSameValues(g.packs, this.correctCard().packs));
  }

  hasAnyPack() {
    return this.correctCard().packs.some(p => this.hasPack(p));
  }

  hasTrait(trait: string) {
    return this.hasValueArray("traits", trait as never);
  }

  hasAllTraits() {
    return this.guesses().some(g => arraysHaveSameValues(g.traits, this.correctCard().traits));
  }

  hasAnyTrait() {
    return this.correctCard().traits.some(t => this.hasTrait(t));
  }
}
