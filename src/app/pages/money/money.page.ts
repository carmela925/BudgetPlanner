import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonButton, IonBackButton, IonSearchbar, IonList, IonItem, IonLabel, IonDatetime, IonModal, IonDatetimeButton} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-money',
  templateUrl: './money.page.html',
  styleUrls: ['./money.page.scss'],
  standalone: true,
  imports: [IonContent]
})
export class MoneyPage{
  
}
