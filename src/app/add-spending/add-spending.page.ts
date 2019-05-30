import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-spending',
  templateUrl: './add-spending.page.html',
  styleUrls: ['./add-spending.page.scss'],
})
export class AddSpendingPage implements OnInit {

  categories: object[] = [
    {
      name: 'Home Expenses',
      subs: [
        'Mortgage/Rent',
        'Home/Rental Insurance',
        'Electicity',
        'Gas/Oil',
        'Water/Sewer/Trash',
        'Phone',
        'Cable/Satelite',
        'Internet',
        'Furnishings/Appliances',
        'Lawn/Garden',
        'Maintenance',
        'Improvements',
        'Other'
      ]
    },
    {
      name: 'Transportation',
      subs: [
        'Vehicle Payments',
        'Vehicle Insurance',
        'Fuel',
        'Vehicle Repairs',
        'Registration/Licence',
        'Other'
      ]
    },
    {
      name: 'Health',
      subs: [
        'Health Insurance',
        'Doctor/Dentist',
        'Medicine/Drugs',
        'Health Club Dues',
        'Life Insurance',
        'Vetinarian/Pet Care',
        'Other'
      ]
    },
    {
      name: 'Charity/Gifts',
      subs: [
        'Gifts Given',
        'Charitable Dontions',
        'Religious Donations',
        'Other'
      ]
    },
    {
      name: 'Subscriptions',
      subs: [
        'Newspaper',
        'Magazines',
        'Dues/Memberships',
        'Other'
      ]
    },
    {
      name: 'Daily Living',
      subs: [
        'Groceries',
        'Personal Supplies',
        'Clothing',
        'Cleaning',
        'Education/Lessons',
        'Dining/Eating Out',
        'Salon/Barber',
        'Pet Food',
        'Other'
      ]
    },
    {
      name: 'Entertainment',
      subs: [
        'Videos/DVDs',
        'Music',
        'Games',
        'Rentals',
        'Movies/Theatres',
        'Concerts/Plays',
        'Books',
        'Hobbies',
        'Films/Photos',
        'Sports',
        'Outdoor Recreation',
        'Toys/Gadgets',
        'Vacation/Travel',
        'Other'
      ]
    },
    {
      name: 'Savings',
      subs: [
        'Emergency Fund',
        'Transfer to Savings',
        'Retirement',
        'Investments',
        'Education',
        'Other'
      ]
    },
    {
      name: 'Obligations',
      subs: [
        'Student Loan',
        'Other Loan',
        'Credit Cards',
        'Alimony/Child Support',
        'Taxes',
        'Other'
      ]
    },
    {
      name: 'Miscellaneous',
      subs: [
        'Bank Fees',
        'Postage',
        'Other'
      ]
    }
  ];

  selectedCategory: any;

  subCategory: string[];

  subCategorySet = false;
  categorySet = false;

  spendingAmount: number;

  amount: number;
  categoryChosen: string;
  subCategoryChosen: string;
  comment: string;
  date: any;

  spending: object = {
  };

  constructor() { }

  ngOnInit() {
  }

  categorySelected(event) {
    this.selectedCategory = event.detail.value;
    this.subCategory = this.selectedCategory.subs;
    this.categorySet = true;
  }

  subCategorySelected(event) {
    this.subCategoryChosen = event.detail.value;
    this.subCategorySet = true;
  }

  saveExpense() {
    console.log(this.selectedCategory.name);
    console.log(this.subCategoryChosen);
    console.log(this.spendingAmount);
    console.log(this.date);
  }
}
