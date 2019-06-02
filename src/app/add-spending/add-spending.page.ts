import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

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
  categoryChosen: string;
  subCategoryChosen: string;
  comment = '';
  date: any;

  expense: object = { };

  constructor(private router: Router, public alertController: AlertController) { }

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
    const newExpense = {
      date: this.date.toLocaleString(),
      amount: this.spendingAmount,
      category: this.selectedCategory.name,
      subCategory: this.subCategoryChosen,
      comment: this.comment
    };
    this.expense = newExpense;
    console.log(this.expense);
    this.presentAlert();
  }

  clear() {
    this.date = '';
    this.spendingAmount = 0;
    this.selectedCategory = {};
    this.subCategoryChosen = '';
    this.comment = '';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
     /*  header: 'Alert',
      subHeader: 'Subtitle', */
      message: 'Your new expense has been saved.',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['/home']);
            console.log('Confirm OK!');
          }
        }
      ]
    });

    await alert.present();
  }
}
