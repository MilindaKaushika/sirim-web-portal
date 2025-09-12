import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;

  constructor(private router: Router, private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
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
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;
      if (username === 'admin' && password === 'admin123') {
        this.router.navigate(['/dashboard']);
      } else {
        this.loginForm.markAllAsTouched();
      }
    }
  }

  onSigninClick() {
    this.router.navigate(['/create-account']);
  }


  ngOnInit(): void {
  }
}
