import {Component, inject} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserData} from '../game.component';
import {StatCard} from './stat-card/stat-card';

@Component({
  selector: 'app-stats-modal',
  imports: [
    StatCard
  ],
  templateUrl: './stats-modal.component.html',
  styleUrl: './stats-modal.component.scss',
})
export class StatsModalComponent {
  activeModal = inject(NgbActiveModal);

  userData!: Record<string, UserData>;

  getPlayedDays() {
    return Object.values(this.userData).filter(d => d.guesses?.length);
  }

  getGuessedDays() {
    return this.getPlayedDays().filter(d => d.guesses.includes(d.card));
  }

  getLowestGuessCount() {
    return Math.min(...this.getGuessedDays().map(d => d.guesses.length));
  }

  getHighestGuessCount() {
    return Math.max(...this.getGuessedDays().map(d => d.guesses.length));
  }

  getAverageGuessCount() {
    let guessedDays = this.getGuessedDays();
    return Number((guessedDays.map(d => d.guesses.length).reduce((a, b) => a + b, 0) / guessedDays.length).toFixed(2));
  }

  protected readonly Object = Object;
}
