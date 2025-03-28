import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonButton, IonBackButton, IonSearchbar, IonList, IonItem, IonLabel, IonDatetime, IonModal, IonDatetimeButton, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [IonIcon, CommonModule, FormsModule, ReactiveFormsModule, IonContent, IonButton, IonBackButton, IonSearchbar, RouterModule, IonList, IonItem, IonLabel, IonDatetime, IonModal, IonDatetimeButton]
})
export class CalendarPage implements OnInit,AfterViewInit {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @ViewChildren('dateBox') dateBoxes!: QueryList<ElementRef>;

  dates: { date: number; day: string }[] = [];
  selectedDate: number | null = new Date().getDate();
  expandsearch: boolean = false;
  searchText: string = '';
  selectedMonth = new Date().getMonth();
  selectedYear = new Date().getFullYear();
  initialDate: string = new Date().toISOString();
  selectedTab = 0;

  constructor(){
    this.selectedDate = new Date().getDate();
  }

  ngOnInit() {
    this.updateDates();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollToSelectedDate();
    }, 0);
  }

  scrollToSelectedDate() {
    const selectedBox = this.dateBoxes.find(
      (box, index) => this.dates[index].date === this.selectedDate
    );

    if (selectedBox) {
      const container = this.scrollContainer.nativeElement;
      const boxElement = selectedBox.nativeElement;

      const containerRect = container.getBoundingClientRect();
      const boxRect = boxElement.getBoundingClientRect();

      // Calculate scroll offset to center the selected element
      const offset =
        boxRect.left - containerRect.left + container.scrollLeft - container.offsetWidth / 2 + boxElement.offsetWidth / 2;

      container.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
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

    /**
     * Handle changes from the ion-datetime component.
    * @param event - The ionChange event containing the selected value.
    */
   onDateChange(event: any) {
     const selectedModalDate = new Date(event.detail.value); // Convert the value to a Date object
     this.selectedYear = selectedModalDate.getFullYear();    // Extract the year
     this.selectedMonth = selectedModalDate.getMonth();      // Extract the month (0-indexed)
     console.log("selectedDate: ",selectedModalDate);
     this.updateDates();                                // Update the dates array
   }

  onDateSelect(date: number) {
    this.selectedDate = date; // Highlight selected date
    console.log(`Selected date: ${this.selectedYear}-${this.selectedMonth + 1}-${date}`);
    this.scrollToSelectedDate();
  }

  onReset(){
    this.selectedMonth = new Date().getMonth();
    this.selectedYear = new Date().getFullYear();
    this.updateDates();
    this.selectedDate = new Date().getDate();
    this.initialDate = new Date().toISOString();
    this.scrollToSelectedDate();
  }

  onClick(){
    console.log("hey");
  }

  onSelectTab(n: number){
    this.selectedTab = n;
  }

  onSearch() {
    if (this.expandsearch) {
      console.log('Search clicked');
    } else {
      this.expandsearch = true;
      console.log(this.expandsearch);
    }
  }
  onSearchCancel() {
    if(this.searchText === ''){
      this.expandsearch = false;
      console.log(this.expandsearch);
    } else {
      console.log(this.expandsearch);
    }
  }
}
