import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  Article,
  Articles,
  ResponseNewsApi,
} from '../interfaces/news.interface';
import { ModalNewsDetailsComponent } from '../modal-news-details/modal-news-details.component';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public news: Articles = null;
  constructor(
    private newsService: NewsService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.newsService.getNotices().subscribe((res: ResponseNewsApi) => {
      this.news = res.articles;
      console.log(this.news);
    });
  }

  async openNewsDetails(article: Article) {
    const modal = await this.modalCtrl.create({
      component: ModalNewsDetailsComponent,
      componentProps: { article },
    });

    await modal.present();
  }
}
