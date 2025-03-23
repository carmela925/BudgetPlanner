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
    path: 'money',
    loadComponent: () => import('./pages/money/money.page').then( m => m.MoneyPage)
  },
  {
    path: 'analytics',
    loadComponent: () => import('./pages/analytics/analytics.page').then( m => m.AnalyticsPage)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./pages/calendar/calendar.page').then( m => m.CalendarPage)
  },
  {
    path: 'add-money/:id',
    loadComponent: () => import('./pages/add-money/add-money.page').then( m => m.AddMoneyPage)
  },
  {
    path: 'home/view-expenses',
    loadComponent: () => import('./pages/view-expenses/view-expenses.page').then( m => m.ViewExpensesPage)
  },
  {
    path: 'expense-detail',
    loadComponent: () => import('./pages/expense-detail/expense-detail.page').then( m => m.ExpenseDetailPage)
  },

];
