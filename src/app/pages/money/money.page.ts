import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import { IonContent, IonSelect, IonSelectOption, IonBackButton, IonSearchbar, IonList, IonItem, IonLabel} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-money',
  templateUrl: './money.page.html',
  styleUrls: ['./money.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonContent, IonSelect, IonSelectOption, IonBackButton, IonSearchbar, RouterModule, IonList, IonItem, IonLabel]
})
export class MoneyPage implements OnInit {
  dates: { date: number; day: string }[] = [];
  selectedDate: number | null = null;

  // Month and Year Data
  months = [
    { name: 'January', value: 0 },
    { name: 'February', value: 1 },
    { name: 'March', value: 2 },
    { name: 'April', value: 3 },
    { name: 'May', value: 4 },
    { name: 'June', value: 5 },
    { name: 'July', value: 6 },
    { name: 'August', value: 7 },
    { name: 'September', value: 8 },
    { name: 'October', value: 9 },
    { name: 'November', value: 10 },
    { name: 'December', value: 11 },
  ];
  years: number[] = [];
  selectedMonth = new Date().getMonth();
  selectedYear = new Date().getFullYear();

  ngOnInit() {
    this.generateYears();
    this.updateDates();
  }

  // Generate years from a range (e.g., 1900–2100)
  generateYears() {
    const startYear = 1900;
    const endYear = 2100;
    this.years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  }

  // Update dates and days based on selected month and year
  updateDates() {
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
    this.dates = Array.from({ length: daysInMonth }, (_, i) => {
      const date = i + 1;
      const dayName = new Date(this.selectedYear, this.selectedMonth, date).toLocaleString('en-US', { weekday: 'short' });
      return { date, day: dayName };
    });
  }

  onMonthOrYearChange() {
    this.updateDates();
  }

  onDateSelect(date: number) {
    this.selectedDate = date; // Highlight selected date
    console.log(`Selected date: ${this.selectedYear}-${this.selectedMonth + 1}-${date}`);
  }
}
