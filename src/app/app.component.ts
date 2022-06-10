import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Tree',
      userName: '@nature',
      imageUrl: 'assets/tree.png',
      content: 'I love tree from my younger age',
    },
    {
      title: 'Snowy Biking',
      userName: '@lovebiking12',
      imageUrl: 'assets/snow_biking.jpg',
      content: 'Snow biking is one of my favorite game',
    },
    {
      title: 'Snowy Mountain',
      userName: '@snowbk12',
      imageUrl: 'assets/snown_mountain.webp',
      content: 'Snow Mountains are the best mountains',
    },
    {
      title: 'Electrical car',
      userName: '@pmu123',
      imageUrl: 'assets/cars.jpg',
      content: 'My favorite car of all time',
    },
  ];
}
