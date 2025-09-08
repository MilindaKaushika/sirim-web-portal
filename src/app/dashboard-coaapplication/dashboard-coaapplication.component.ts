import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard-coaapplication',
  templateUrl: './dashboard-coaapplication.component.html',
  styleUrls: ['./dashboard-coaapplication.component.css']
})
export class DashboardCoaapplicationComponent implements OnInit {
  isDisabled = false;
  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'calendar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/calendar.svg'));
    iconRegistry.addSvgIcon(
      'clock',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clock.svg'));
  }

  ngOnInit(): void {
  }

}
