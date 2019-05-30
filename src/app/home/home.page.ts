import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }
  openPage(pageName) {
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
      default:
        break;
    }

  }
}
