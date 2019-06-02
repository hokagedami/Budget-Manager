import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  categorySelected(event) {
    this.selectedCategory = event.detail.value;
    console.log(this.selectedCategory);
  }
}
