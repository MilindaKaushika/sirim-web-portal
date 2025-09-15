import { AfterViewInit,Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-loader-page',
  templateUrl: './loader-page.component.html',
  styleUrls: ['./loader-page.component.css']
})
export class LoaderPageComponent implements OnInit,AfterViewInit {

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'sirim-name',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo-name.svg'));
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
      }
    );

    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }
}
