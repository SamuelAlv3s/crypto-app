import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseCoinsApi } from '../interfaces/coins.interface';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private favoritesUpdated: BehaviorSubject<boolean> = new BehaviorSubject(
    null
  );
  constructor(private httpClient: HttpClient) {}

  getCoins(): Observable<ResponseCoinsApi> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-messari-api-key': environment.messariApiKey,
      }),
    };
    return this.httpClient.get<ResponseCoinsApi>(
      'https://data.messari.io/api/v2/assets',
      httpOptions
    );
  }

  getStateFavorites(): Observable<boolean> {
    return this.favoritesUpdated.asObservable();
  }

  setStateFavorites() {
    this.favoritesUpdated.next(true);
  }
}
