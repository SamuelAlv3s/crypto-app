import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public favorites = [];
  constructor(private coinsService: CoinService) {}

  ngOnInit() {
    this.coinsService.getStateFavorites().subscribe(async () => {
      const { value } = await Storage.get({ key: 'favorites' });

      if (value) {
        this.favorites = JSON.parse(value);
        console.log(this.favorites);
      }
    });
  }
}
