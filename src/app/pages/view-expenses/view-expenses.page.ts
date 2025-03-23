import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonBackButton, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-view-expenses',
  templateUrl: './view-expenses.page.html',
  styleUrls: ['./view-expenses.page.scss'],
  standalone: true,
  imports: [IonList, IonLabel, IonItem, IonBackButton, IonSearchbar, IonContent,CommonModule, FormsModule]
})
export class ViewExpensesPage implements OnInit {
  expandsearch: boolean = false;
  searchText: string = '';

  constructor() { }

  ngOnInit() {
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
