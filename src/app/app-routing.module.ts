import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-spending', loadChildren: './add-spending/add-spending.module#AddSpendingPageModule' },
  { path: 'add-income', loadChildren: './add-income/add-income.module#AddIncomePageModule' },
  { path: 'spending-limit', loadChildren: './spending-limit/spending-limit.module#SpendingLimitPageModule' },  { path: 'stats', loadChildren: './stats/stats.module#StatsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
