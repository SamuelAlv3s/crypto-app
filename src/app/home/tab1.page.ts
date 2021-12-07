import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { ModalController, ToastController } from '@ionic/angular';
import { Coin } from '../interfaces/coins.interface';
import { ModalUserInfoComponent } from '../modal-user-info/modal-user-info.component';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public coins: Coin[] = null;
  public userMoney;
  constructor(
    private coinService: CoinService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    this.coinService.getCoins().subscribe(async (res) => {
      console.log(res.data);
      this.coins = res.data;

      await this.verifyAndMarkAsFavorite();
    });

    const { value } = await Storage.get({ key: 'userMoney' });

    if (value) {
      this.userMoney = JSON.parse(value);
    } else {
      this.userMoney = 80000;
      await Storage.set({
        key: 'userMoney',
        value: JSON.stringify(this.userMoney),
      });
    }
  }

  async verifyAndMarkAsFavorite() {
    const { value } = await Storage.get({ key: 'favorites' });

    if (value) {
      for (let item of JSON.parse(value)) {
        for (let coin of this.coins) {
          if (item.id === coin.id) {
            if (item.favorite) {
              coin.favorite = true;
            }
          }
        }
      }
    }
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
    this.coinService.setStateFavorites();
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1000,
    });

    await toast.present();
  }

  async showToastError(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1000,
      color: 'danger',
      position: 'top',
    });

    await toast.present();
  }

  doRefresh(ev) {
    this.coinService.getCoins().subscribe(async (res) => {
      this.coins = res.data;
      ev.target.complete();

      await this.verifyAndMarkAsFavorite();
    });
  }

  searchCoin(searchTerm: string) {
    console.log(searchTerm);
    if (searchTerm.length > 2) {
      this.coins = this.coins.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.coinService.getCoins().subscribe((res) => {
        this.coins = res.data;
      });
    }
  }

  async buyCoin(coin: Coin) {
    const { value } = await Storage.get({ key: 'userMoney' });

    if (value) {
      let wallet = [];
      if (JSON.parse(value) >= coin.metrics.market_data.price_usd) {
        const { value } = await Storage.get({ key: 'wallet' });
        if (value) {
          wallet = JSON.parse(value);
          wallet.push(coin);
        } else {
          wallet = [coin];
        }

        await Storage.set({ key: 'wallet', value: JSON.stringify(wallet) });
        this.userMoney -= coin.metrics.market_data.price_usd;
        await Storage.set({
          key: 'userMoney',
          value: JSON.stringify(this.userMoney),
        });
        this.showToast('Successful purchase');
      } else {
        this.showToastError('Insufficient funds');
      }
    }
  }

  async showModalUserInfo() {
    const { value } = await Storage.get({ key: 'wallet' });
    let wallet = [];
    if (value) {
      wallet = JSON.parse(value);
    }
    const modal = await this.modalCtrl.create({
      component: ModalUserInfoComponent,
      componentProps: {
        userMoney: this.userMoney,
        wallet,
      },
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data) {
      if (data.getCoins) {
        this.coinService.getCoins().subscribe(async (res) => {
          this.coins = res.data;

          await this.verifyAndMarkAsFavorite();
        });
      }
      this.userMoney = data.currentUserMoney;
    }
  }
}
