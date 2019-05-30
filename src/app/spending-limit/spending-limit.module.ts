import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpendingLimitPage } from './spending-limit.page';

const routes: Routes = [
  {
    path: '',
    component: SpendingLimitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpendingLimitPage]
})
export class SpendingLimitPageModule {}
