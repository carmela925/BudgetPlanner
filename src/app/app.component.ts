import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, person, grid, card, chevronBackOutline, chevronDownOutline, add, trashOutline, trash} from "ionicons/icons"
import { TabsModule } from "./components/tabs/tabs.module";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, TabsModule],
})
export class AppComponent {
  constructor() {
    addIcons({
      home,
      add,
      grid,
      card,
      chevronBackOutline,
      chevronDownOutline,
      trashOutline,
      trash
    })
  }
}
