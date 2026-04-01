import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {McCardData} from '../model/mcCardData';
import {AhCardData} from '../model/ahCardData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  httpClient = inject(HttpClient);

  getMCData() {
    return this.httpClient.get<McCardData[]>("cards.json");
  }

  getAHData() {
    return this.httpClient.get<AhCardData[]>("cards_ah.json");
  }
}
