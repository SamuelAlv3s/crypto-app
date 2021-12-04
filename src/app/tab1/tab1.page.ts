import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { ToastController } from '@ionic/angular';
import { Coin } from '../interfaces/coins.interface';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public coins: Coin[] = null;
  constructor(
    private coinService: CoinService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.coinService.getCoins().subscribe((res) => {
      console.log(res.data);
      this.coins = res.data;
    });
  }

  async addCoinToFavorite(coin: Coin) {
    const { value }: any = await Storage.get({ key: 'favorites' });
    let favorites = [];
    let isSameValue = false;
    if (value) {
      favorites = JSON.parse(value);

      for (let item of favorites) {
        if (item.id === coin.id) {
          isSameValue = true;
        }
      }

      if (coin.favorite) {
        coin.favorite = false;
        favorites.splice(favorites.indexOf(coin), 1);
        this.showToast('Coin removed from favorite');
      }

      if (!isSameValue) {
        coin.favorite = true;
        favorites.push(coin);
        this.showToast('Coin added to favorite');
      }
    } else {
      coin.favorite = true;
      favorites = [coin];
      this.showToast('Coin added to favorite');
    }

    await Storage.set({ key: 'favorites', value: JSON.stringify(favorites) });
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1000,
    });

    await toast.present();
  }
}
