import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  @Output() back = new EventEmitter<void>();

  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, {validators: this.passwordsMatchValidator});
  }

  get password(): AbstractControl | null {
    return this.resetPasswordForm.get('password');
  }

  get confirmPassword(): AbstractControl | null {
    return this.resetPasswordForm.get('confirmPassword');
  }

  passwordsMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return password === confirm ? null : {passwordMismatch: true};
  }

  onUpdatePassword() {
    if (this.resetPasswordForm.valid) {
      const newPassword = this.resetPasswordForm.value.password;
      console.log('New password submitted:', newPassword);

    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }

  backToLogin() {
    this.back.emit();
  }

  ngOnInit(): void {
  }

}
