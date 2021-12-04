import { Component, OnInit } from '@angular/core';
import { Articles, ResponseNewsApi } from '../interfaces/news.interface';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public news: Articles = null;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNotices().subscribe((res: ResponseNewsApi) => {
      this.news = res.articles;
      console.log(this.news);
    });
  }
}
