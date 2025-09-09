import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
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
  }

  onLoginClick() {
    this.router.navigate(['/dashboard']);
  }
  onSigninClick() {
    this.router.navigate(['/create-account']);
  }

  ngOnInit(): void {
  }

}
