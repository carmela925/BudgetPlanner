import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonGrid, IonRow, IonCol, IonInput, IonRippleEffect } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
  standalone: true,
  imports: [IonRippleEffect, IonInput, IonCol, IonRow, IonGrid, IonIcon, IonContent, CommonModule, FormsModule, RouterModule]
})
export class AddExpensePage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("hey")
  }

}
