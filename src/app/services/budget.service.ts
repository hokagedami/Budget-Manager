import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(
    private storage: Storage
  ) { }


  getExpenses() {

  }

  getIncomes() {

  }

  addExpense(expense) {

  }

  addIncome(income) {
  }
}
