import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements OnInit {

  constructor(private router: Router) {}

  goToAddExpense() {
    const id = 'Expense'; // Replace with your dynamic ID
    this.router.navigate(['/add-money', id], { state: { animation: 'forward' } });
  }

  navigate(page: string){
    this.router.navigate([`/${page}`], { state: { animation: 'forward' } });
  }

  ngOnInit() {
    console.log("hey")
  }

}
