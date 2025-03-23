import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonRippleEffect } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
Chart.register(...registerables);

export interface Coordinate {
  x: number;
  y: number;
  value: number;
}


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
  standalone: true,
  imports: [IonRippleEffect, IonIcon, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, CommonModule, FormsModule, RouterModule]
})
export class AnalyticsPage implements OnInit,AfterViewInit {
  @ViewChild('lineChartCanvas') lineChartCanvas: any;
  @ViewChild('doughnutCanvas', { static: false }) doughnutCanvas!: ElementRef;
  doughnutChart: any;
  lineChart: any;
  chart: any;
  heatmap: any;

  constructor() {}

  ngOnInit() {
    console.log("hey")
  }

  ngAfterViewInit() {
    this.createLineChart();
    this.createDoughnutChart();
    this.createChart();      
  }

  createChart() {
    this.chart = new Chart('weeklyExpensesChart', {
      type: 'bar',
      data: {
        labels: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'], // Days of the week
        datasets: [
          {
            label: 'Weekly Expenses',
            data: [50, 75, 100, 65, 90, 120, 80], // Example data for each day (in currency)
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true, // Ensures the Y axis starts from 0
            grid: {
              display: false, // Disable horizontal grid lines
            },
            ticks: {
              stepSize: 20, // Define the step size of the Y axis (you can adjust it)
              callback: function(value) {
                return '$' + value; // Format the Y axis labels as currency
              },
            },
          },
          x: {
            grid: {
              display: false, // Disable vertical grid lines
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Optionally hide the legend
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return '$' + tooltipItem.raw; // Format tooltip to display currency
              },
            },
          },
        },
      },
    });
  }

  createLineChart() {
    const ctx = this.lineChartCanvas.nativeElement.getContext('2d');
  
    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Example months
        datasets: [
          {
            label: 'Income',
            data: [500, 700, 800, 600, 1000, 1200], // Example income data
            borderColor: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderWidth: 2,
            fill: true,
            tension: 0.4, // This makes the line curved
          },
          {
            label: 'Expenses',
            data: [400, 600, 750, 500, 950, 1100], // Example expense data
            borderColor: '#00ebc8',
            backgroundColor: '#00ebc85d',
            borderWidth: 2,
            fill: true,
            tension: 0.4, // This makes the line curved
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        animation: {
          duration: 1000, // 1-second animation
          easing: 'easeInOutQuart', // Smooth transition
        },        
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  
  createDoughnutChart() {
    const ctx = this.doughnutCanvas.nativeElement.getContext('2d');

    this.doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Food', 'Transport', 'Rent', 'Shopping', 'Entertainment'],
        datasets: [
          {
            data: [25, 15, 30, 10, 20], // Percentage breakdown
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
            hoverOffset: 10
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    });
  }
}
