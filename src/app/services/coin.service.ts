import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseCoinsApi } from '../interfaces/coins.interface';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
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
}
