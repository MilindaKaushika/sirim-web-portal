import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  constructor( private iconRegistry: MatIconRegistry,
               private sanitizer: DomSanitizer,private dialogRef: MatDialogRef<MessageBoxComponent>) {
    iconRegistry.addSvgIcon(
      'success',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/success-icon.svg'));
    iconRegistry.addSvgIcon(
      'warning',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/warning-icon.svg'));
    iconRegistry.addSvgIcon(
      'error',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/error-icon.svg'));
    iconRegistry.addSvgIcon(
      'info',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/info-icon.svg'));
    iconRegistry.addSvgIcon(
      'pending',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pending-icon.svg'));
    iconRegistry.addSvgIcon(
      'security-info',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security-info-icon.svg'));
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  // Use it panel class when you use for popup view

//   onView() {
//     this.dialog.open(MessageBoxComponent, {
//       width: 'auto',
//       height: 'auto',
//       panelClass: 'no-padding-dialog',
//       disableClose: false
//     });
//   }
}
