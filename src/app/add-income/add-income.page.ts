import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage implements OnInit {

  incomeCategories: string[] = [
    'Wages/Salary',
    'Interest Income',
    'Dividends',
    'Gifts Recieved',
    'Refunds/Reinbursements',
    'Transfer from Savings',
    'Other'
  ];
  selectedCategory: any;
  amount: number;
  date: any;
  comment: string;
  income: object;
  data: any;

  constructor(
    private router: Router,
    public alertController: AlertController,
    private storage: Storage,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  categorySelected(event) {
    this.selectedCategory = event.detail.value;
    console.log(this.selectedCategory);
  }

  saveIncome() {
    this.income = {
      date: this.date,
      amount: this.amount,
      category: this.selectedCategory,
      comment: this.comment
    };

    this.storage.get('incomes').then((val) => {
      if (val === undefined
          || val === null
           || typeof val === 'undefined') {
        this.data = [];
        this.data.push(this.income);
        this.storage.set('incomes', this.data).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log('set error: ' + err);
        });
      } else {
        this.data = val;
        this.data.push(this.income);
        this.storage.set('incomes', this.data).then((res) => {
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

  clear() {
    this.date = null;
    this.amount = null;
    this.comment = null;
    this.selectedCategory = null;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
     /*  header: 'Alert',
      subHeader: 'Subtitle', */
      message: 'Your new income has been saved.',
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
