import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'add-expense',
    loadComponent: () => import('./pages/add-expense/add-expense.page').then( m => m.AddExpensePage)
  },
  {
    path: 'money',
    loadComponent: () => import('./pages/money/money.page').then( m => m.MoneyPage)
  },
  {
    path: 'add-budget',
    loadComponent: () => import('./pages/add-budget/add-budget.page').then( m => m.AddBudgetPage)
  },
  {
    path: 'add-income',
    loadComponent: () => import('./pages/add-income/add-income.page').then( m => m.AddIncomePage)
  },
  {
    path: 'analytics',
    loadComponent: () => import('./pages/analytics/analytics.page').then( m => m.AnalyticsPage)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./pages/calendar/calendar.page').then( m => m.CalendarPage)
  },
];
