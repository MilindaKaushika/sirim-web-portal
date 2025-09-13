import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {COUNTRY_CODES, CountryCode} from '../country-codes';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  countryCodes: CountryCode[] = COUNTRY_CODES;
  selectedCountry: CountryCode = this.countryCodes.find(c => c.calling_code === '+94') || this.countryCodes[0];
  registrationForm: FormGroup;

  constructor(private router: Router) {
    this.registrationForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      businessRegNo: new FormControl('', Validators.required),
      companyAddress: new FormControl('', Validators.required),
      contactPersonName: new FormControl('', Validators.required),
      contactPersonPosition: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{7,15}$')
      ]),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      website: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  get fullPhoneNumber(): string {
    const phone = this.registrationForm.get('phoneNumber')?.value || '';
    return `${this.selectedCountry.calling_code}${phone}`;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
