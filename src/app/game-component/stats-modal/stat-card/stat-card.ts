import {Component, computed, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
  host: {
    '[class]': 'colClass()'
  }
})
export class StatCard {
  title = input.required<string>();
  subtitle = input('');
  col = input<string>();
  colClass = computed(() => this.col() ? `col-${this.col()}` : 'col');
}
