import { Component } from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonIcon, IonRippleEffect, IonImg, IonButton, IonButtons } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { ChartComponent, ApexOptions } from 'ngx-apexcharts';

@Component({
  selector: 'app-money',
  templateUrl: './money.page.html',
  styleUrls: ['./money.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonImg, 
    IonRippleEffect, 
    IonIcon, 
    IonContent, 
    RouterModule, 
    IonLabel, 
    IonItem, 
    IonList,
    ChartComponent
  ]
})
export class MoneyPage{
  chartOptions: ApexOptions = {
    chart: {
      type: 'donut', // Specifies a donut chart
    },
    series: [60, 40], // Example: 60% spent, 40% not spent
    colors: ['#000000', '#c1c1c1'], // Black for spent, gray for not spent
    labels: ['Spent', 'Not Spent'], // Optional, but can be used for reference
    dataLabels: {
      enabled: false, // Hides the labels on the chart
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%', // Adjust the size of the donut hole (default 50%)
        },
      },
    },
    legend: {
      show: false, // Hides the legend (side labels)
    },
  };
}
