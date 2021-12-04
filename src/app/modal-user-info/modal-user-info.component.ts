import { Component, Input, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { ModalController } from '@ionic/angular';
import { Coin } from '../interfaces/coins.interface';

@Component({
  selector: 'app-modal-user-info',
  templateUrl: './modal-user-info.component.html',
  styleUrls: ['./modal-user-info.component.scss'],
})
export class ModalUserInfoComponent implements OnInit {
  @Input('userMoney') userMoney;
  @Input('wallet') wallet;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log(this.userMoney);
    console.log(this.wallet);
  }

  async closeModal() {
    this.modalCtrl.dismiss({
      currentUserMoney: this.userMoney,
    });
  }

  redirectToBuy() {
    this.modalCtrl.dismiss({
      getCoins: true,
      currentUserMoney: this.userMoney,
    });
  }

  async sellCoin(coin: Coin) {
    this.wallet.splice(this.wallet.indexOf(coin), 1);
    this.userMoney += coin.metrics.market_data.price_usd;
    await Storage.set({ key: 'wallet', value: JSON.stringify(this.wallet) });
    await Storage.set({
      key: 'userMoney',
      value: JSON.stringify(this.userMoney),
    });
  }
}
