import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @Output() back = new EventEmitter<void>();
  @Output() goToResetPassword = new EventEmitter<void>();
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: new FormControl(''),
    });
  }

  onResetPassword() {
    if (this.forgotPasswordForm.valid) {
      console.log('Reset link sent to:', this.forgotPasswordForm.value.email);

      this.goToResetPassword.emit();
    } else {
      this.forgotPasswordForm.markAllAsTouched();
    }
  }

  backToLogin() {
    this.back.emit();
  }

  ngOnInit(): void {
  }

}
