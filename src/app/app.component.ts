import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, grid, card, chevronBackOutline, chevronDownOutline, add, trashOutline, trash, listOutline} from "ionicons/icons"
import { TabsModule } from "./components/tabs/tabs.module";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, TabsModule, CommonModule],
})
export class AppComponent{
  currentUrl!: string;
  showtab: boolean = true;
  constructor() {
    addIcons({
      home,
      add,
      grid,
      card,
      chevronBackOutline,
      chevronDownOutline,
      trashOutline,
      trash,
      listOutline
    });
  }
}
