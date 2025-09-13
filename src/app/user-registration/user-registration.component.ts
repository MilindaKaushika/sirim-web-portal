import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
