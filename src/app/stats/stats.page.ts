import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {


  expenses: any;
  incomes: any;
  expensesMonth: any = [];
  incomesMonth: any = [];
  months: any = [];
  monthsString =
  {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };
  monthNav: any;

  constructor(
    private location: Location,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('expenses')
      .then((values) => {
        if (values) {
          this.expenses = values;
          this.expensesMonth = values.map((expense: any) => {
            return `${new Date(expense.date).getMonth()} ${new Date(expense.date).getFullYear()}`;
          });
          this.months = this.months.concat(...this.expensesMonth);
          console.log(this.expenses);
        }
      })
      .catch((error) => {
        console.log('Error getting expenses' + error);
      });


    this.storage.get('incomes')
        .then((values) => {
          if (values) {
            this.incomes = values;
            this.incomesMonth = values.map((expense: any) => {
              return `${new Date(expense.date).getMonth()} ${new Date(expense.date).getFullYear()}`;
            });
            this.months = this.months.concat(...this.incomesMonth);
            console.log(this.months);
            const temp = [...this.months];
            this.months = [];
            temp.forEach((month) => {
              if (!this.months.includes(month)) {
                this.months.push(month);
              }
            });
            console.log(this.incomes);
            console.log(this.months);
          }
        })
        .catch((error) => {
          console.log('Error getting incomes' + error);
        });
  }

  myBackButton() {
    this.location.back();
  }

  clearData() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
}
