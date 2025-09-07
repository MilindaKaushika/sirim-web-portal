import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  lastScrollTop = 0;
  showFooterText = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {

      this.showFooterText = true;
    } else if (currentScroll < this.lastScrollTop) {

      this.showFooterText = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative scroll
  }
  constructor() { }

  ngOnInit(): void {
  }

}
