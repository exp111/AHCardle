import {Component, computed, input} from '@angular/core';
import {McCardData} from '../../../../model/mcCardData';

@Component({
  selector: 'guess-info-attribute',
  imports: [],
  templateUrl: './guess-info-attribute.component.html',
  styleUrls: ['../../card-info/card-info-attribute/card-info-attribute.component.scss', './guess-info-attribute.component.scss'],
})
export class GuessInfoAttributeComponent {
  card = input.required<McCardData>();
  field = input.required<keyof McCardData>();
  guesses = input.required<McCardData[]>();
  displayFunc = input<(c: McCardData) => string>((c: McCardData) => c[this.field()]!.toString());
  name = input.required<string>();

  PLACEHOLDER = input.required<string>();
  hasFilter = input.required<(field: string, value?: unknown) => boolean>();
  setFilter = input.required<(field: keyof McCardData) => void>();

  displayValue = computed(() => this.displayFunc()(this.card()));
  hasValue = computed(() => this.guesses().some(g => g[this.field()] === this.card()[this.field()]));
  computedDisplay = computed(() => this.hasValue() ? this.displayValue() : this.PLACEHOLDER());
}
