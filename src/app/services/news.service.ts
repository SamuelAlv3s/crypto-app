import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseNewsApi } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  getNotices(): Observable<ResponseNewsApi> {
    return this.httpClient.get<ResponseNewsApi>(
      `https://newsapi.org/v2/everything?q=bitcoin&language=en&sortBy=publishedAt&apiKey=${environment.newsKeyAPiKey}`
    );
  }
}
