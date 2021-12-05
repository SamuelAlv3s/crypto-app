import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Article } from '../interfaces/news.interface';

@Component({
  selector: 'app-modal-news-details',
  templateUrl: './modal-news-details.component.html',
  styleUrls: ['./modal-news-details.component.scss'],
})
export class ModalNewsDetailsComponent implements OnInit {
  @ViewChild('article', { static: true }) article: Article;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    if (this.article) console.log(this.article);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
