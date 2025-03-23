import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonList, IonLabel, IonItem, IonCardSubtitle, IonCard, IonTabButton, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonTabButton, IonCard, IonCardSubtitle, IonItem, IonLabel, IonList, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
})
export class HomePage {
  constructor() {}
}
