import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-spending-limit',
  templateUrl: './spending-limit.page.html',
  styleUrls: ['./spending-limit.page.scss'],
})
export class SpendingLimitPage implements OnInit {

  spendingLimit: number;
  data: any;
  naira = '\u20a6';
  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  saveSpendingLimit() {
    console.log(this.spendingLimit);

    this.storage.get('limit').then((val) => {
      if (val === undefined
          || val === null
           || typeof val === 'undefined') {
        this.storage.set('limit', this.spendingLimit).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log('set error: ' + err);
        })
      } else {
        this.storage.set('limit', this.spendingLimit).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log('set error: ' + err + err.stack);
        });
      }
    }).catch((err) => {
      console.log('get error: ' + err + err.stack);
    });

    this.presentAlert();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
     /*  header: 'Alert',
      subHeader: 'Subtitle', */
      message: `Your spending limit for this month has been set at  ${this.naira}${parseFloat(this.spendingLimit.toFixed(2))}`,
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          cssClass: 'secondary',
          handler: () => {
            this.navCtrl.navigateBack('/home');
          }
        }
      ]
    });

    await alert.present();
  }

}
