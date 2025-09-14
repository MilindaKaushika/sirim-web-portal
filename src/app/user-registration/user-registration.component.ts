import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {COUNTRY_CODES, CountryCode} from '../country-codes';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

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
  userType: 'importer' | 'manufacturer' | 'agent' | null = null;
  uploadedFiles: {
    loa: File[],
    id: File[],
    agent: File[],
    certificate: File[]
  } = {
    loa: [],
    id: [],
    agent: [],
    certificate: []
  };


  isDragOver = {
    loa: false,
    id: false,
    agent: false,
    certificate: false
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {

    iconRegistry.addSvgIcon('upload', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/upload.svg'));
    iconRegistry.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/close.svg'));


    this.registrationForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      businessRegNo: new FormControl('', Validators.required),
      companyAddress: new FormControl('', Validators.required),
      contactPersonName: new FormControl('', Validators.required),
      contactPersonPosition: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{7,15}$')]),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      website: new FormControl(''),
      phoneNumber1: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.userType = this.route.snapshot.queryParamMap.get('type') as any;
  }

  get fullPhoneNumber(): string {
    const phone = this.registrationForm.get('phoneNumber')?.value || '';
    return `${this.selectedCountry.calling_code}${phone}`;
  }

  get fullPhoneNumber2(): string {
    const phone = this.registrationForm.get('phoneNumber1')?.value || '';
    return `${this.selectedCountry1.calling_code}${phone}`;
  }

  get selectedUserType(): string {
    switch (this.userType?.toLowerCase()) {
      case 'importer':
        return 'Importer';
      case 'manufacturer':
        return 'Manufacturer';
      case 'agent':
        return 'Agent';
      default:
        return '';
    }
  }

  get certificateTitle(): string {
    switch (this.userType?.toLowerCase()) {
      case 'manufacturer':
        return 'Foreign Certificate';
      case 'importer':
        return 'Company Certificate';
      default:
        return 'Company Certificate';
    }
  }


  goToLogin() {
    this.router.navigate(['/login']);
  }


  onUploadClick(type: 'loa' | 'id' | 'agent' | 'certificate'): void {
    const input = document.getElementById(`fileInput-${type}`) as HTMLInputElement;
    input?.click();
  }


  onFileSelected(event: Event, type: 'loa' | 'id' | 'agent' | 'certificate'): void {
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

    this.uploadedFiles[type] = [...this.uploadedFiles[type], ...validFiles];
  }


  onDragOver(event: DragEvent, type: 'loa' | 'id' | 'agent' | 'certificate'): void {
    event.preventDefault();
    this.isDragOver[type] = true;
  }

  onDragLeave(event: DragEvent, type: 'loa' | 'id' | 'agent' | 'certificate'): void {
    event.preventDefault();
    this.isDragOver[type] = false;
  }

  onDrop(event: DragEvent, type: 'loa' | 'id' | 'agent' | 'certificate'): void {
    event.preventDefault();
    this.isDragOver[type] = false;

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

    this.uploadedFiles[type] = [...this.uploadedFiles[type], ...validFiles];
  }

  removeFile(index: number, type: 'loa' | 'id' | 'agent' | 'certificate'): void {
    this.uploadedFiles[type].splice(index, 1);
  }
}
