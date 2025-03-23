import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonGrid, IonRow, IonCol, IonInput, IonRippleEffect } from '@ionic/angular/standalone';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.page.html',
  styleUrls: ['./add-money.page.scss'],
  standalone: true,
  imports: [IonRippleEffect, IonInput, IonCol, IonRow, IonGrid, IonIcon, IonContent, CommonModule, FormsModule, RouterModule]
})
export class AddMoneyPage implements OnInit {
  type!: string | null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.type = params.get('id');
      console.log('ID:', this.type);
    });
  }

  ngOnInit() {
    console.log("heyy")
  }

}
