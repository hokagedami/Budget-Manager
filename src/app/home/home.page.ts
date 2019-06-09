import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  spendingLimit: number;
  expenses: number;
  income: number;
  leftToSpend: number;
  constructor(private router: Router, private storage: Storage) {
  }

  ionViewWillEnter() {
    this.storage.get('limit')
      .then((value) => {
        console.log(value);
        this.spendingLimit = isNaN(value) ? 0 : value;
      })
      .catch((error) => {
        console.log('error getting spending limit');
      });

    this.storage.get('expenses')
        .then((values) => {
          const currentYear = new Date().getFullYear();
          const currentMonth = new Date().getMonth();
          if (values) {
                const expensesTotal = values.filter((expense: { date: string | number | Date; }) => {
                  return new Date(expense.date).getMonth() === currentMonth
                    && new Date(expense.date).getFullYear() === currentYear;
                })
                .map((expense: { amount: any; }) => {
                  return expense.amount;
                })
                .reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
                this.expenses = isNaN(expensesTotal) ? 0 : expensesTotal;
              }
        })
        .catch((error) => {
          console.log(error);
        });


    this.storage.get('incomes')
        .then((values) => {
          const currentYear = new Date().getFullYear();
          const currentMonth = new Date().getMonth();
          if (values !== null &&
              values !== undefined) {
              const incomesTotal = values.filter((expense: { date: string | number | Date; }) => {
                return new Date(expense.date).getMonth() === currentMonth
                  && new Date(expense.date).getFullYear() === currentYear;
              })
              .map((expense: { amount: any; }) => {
                return expense.amount;
              })
              .reduce((a: number, b: number) => {
                return a + b;
              }, 0);
              this.income = isNaN(incomesTotal) ? 0 : incomesTotal;
              const diff = this.spendingLimit - this.expenses;
              this.leftToSpend = isNaN(diff) ? 0 : diff;
            }
        })
        .catch((error) => {
          console.log(error);
        });
  }

  openPage(pageName: any) {
    switch (pageName) {
      case 'spending':
        this.router.navigate(['/add-spending']);
        break;
      case 'income':
        this.router.navigate(['/add-income']);
        break;
      case 'spending-limit':
        this.router.navigate(['/spending-limit']);
        break;
        case 'stats':
          this.router.navigate(['/stats']);
          break;
      default:
        break;
    }

  }
}
