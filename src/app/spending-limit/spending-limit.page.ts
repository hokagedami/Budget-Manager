import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spending-limit',
  templateUrl: './spending-limit.page.html',
  styleUrls: ['./spending-limit.page.scss'],
})
export class SpendingLimitPage implements OnInit {

  spendingLimit: number;
  constructor() { }

  ngOnInit() {
  }

  saveSpendingLimit() {
    console.log(this.spendingLimit);
  }

}
