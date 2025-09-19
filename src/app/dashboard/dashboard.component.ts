import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menuOpen = false;

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-menu.svg'));
    iconRegistry.addSvgIcon(
      'application',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/application.svg'));
    iconRegistry.addSvgIcon(
      'mrf-application',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mrs-application.svg'));
    iconRegistry.addSvgIcon(
      'quota',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/quota.svg'));
    iconRegistry.addSvgIcon(
      'payment',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/payment.svg'));
    iconRegistry.addSvgIcon(
      'certificate',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/certificate.svg'));
    iconRegistry.addSvgIcon(
      'guide',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/guide.svg'));
    iconRegistry.addSvgIcon(
      'help',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
    iconRegistry.addSvgIcon(
      'team',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/team.svg'));
  }

  onSidebarToggle(open: boolean) {
    this.menuOpen = open;
  }

  ngOnInit(): void {
  }

}
