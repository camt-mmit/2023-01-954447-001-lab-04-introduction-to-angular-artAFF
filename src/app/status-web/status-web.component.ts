import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-web',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-web.component.html',
  styleUrls: ['./status-web.component.scss'],
})
export class StatusWebComponent {
  currentTime = new Date();
  userAgent = window.navigator.userAgent;
  langugages = navigator.languages;
  cookied = navigator.languages;
  processors = navigator.hardwareConcurrency;
  touchPoint = navigator.maxTouchPoints;
}
