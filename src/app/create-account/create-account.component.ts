import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private router: Router,private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'lightning',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/lightning.svg'));
    iconRegistry.addSvgIcon(
      'badge',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/badge.svg'));
    iconRegistry.addSvgIcon(
      'world',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/world.svg'));
    iconRegistry.addSvgIcon(
      'importer',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Importer.svg'));
    iconRegistry.addSvgIcon(
      'manufacturer',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/manufacturer.svg'));
    iconRegistry.addSvgIcon(
      'agent',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/agent.svg'));
    iconRegistry.addSvgIcon(
      'right',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/right-arrow.svg'));
  }

  ngOnInit(): void {
  }
  goSignIn() {
    this.router.navigate(['/login']);
  }
}
