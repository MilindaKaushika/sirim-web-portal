import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {COUNTRY_CODES, CountryCode} from '../country-codes';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  countryCodes: CountryCode[] = COUNTRY_CODES;
  selectedCountry: CountryCode = this.countryCodes.find(c => c.calling_code === '+60') || this.countryCodes[0];
  selectedCountry1: CountryCode = this.countryCodes.find(c => c.calling_code === '+60') || this.countryCodes[0];
  registrationForm: FormGroup;
  isDragOver = false;
  uploadedFileName: string | null = null;
  uploadedFiles: File[] = [];

  constructor(private router: Router, private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'upload',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/upload.svg'));
    iconRegistry.addSvgIcon(
      'close',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/close.svg'));


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
      website: new FormControl(''),
      phoneNumber1: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  get fullPhoneNumber(): string {
    const phone = this.registrationForm.get('phoneNumber')?.value || '';
    return `${this.selectedCountry.calling_code}${phone}`;
  }

  get fullPhoneNumber2(): string {
    const phone = this.registrationForm.get('phoneNumber1')?.value || '';
    return `${this.selectedCountry1.calling_code}${phone}`;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onUploadClick(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput?.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (!files) return;

    const validFiles: File[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type !== 'application/pdf') {
        alert(`"${file.name}" is not a PDF file.`);
        continue;
      }

      if (file.size > 10 * 1024 * 1024) {
        alert(`"${file.name}" exceeds 10MB.`);
        continue;
      }

      validFiles.push(file);
    }

    this.uploadedFiles = [...this.uploadedFiles, ...validFiles];
  }


  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;

    const files = event.dataTransfer?.files;
    if (!files) return;

    const validFiles: File[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type !== 'application/pdf') {
        alert(`"${file.name}" is not a PDF file.`);
        continue;
      }

      if (file.size > 10 * 1024 * 1024) {
        alert(`"${file.name}" exceeds 10MB.`);
        continue;
      }

      validFiles.push(file);
    }

    this.uploadedFiles = [...this.uploadedFiles, ...validFiles];

    const dataTransfer = new DataTransfer();
    this.uploadedFiles.forEach(file => dataTransfer.items.add(file));
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.files = dataTransfer.files;
  }

  removeFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
  }
}
