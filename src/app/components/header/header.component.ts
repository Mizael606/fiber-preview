import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerFixed: any;
  public show: boolean;

  public showFixedHeader(): void {
    this.show = true;
    this.headerFixed.className += " is-active";
  }

  public hideFixedHeader(): void {
    this.show = false;
    this.headerFixed.className = this.headerFixed.className.replace("is-active", "").trim();
  }

  public initFixedShow():void {
    this.headerFixed = document.querySelector(".header\\.fixed");
    this.show = false;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 180 && !this.show) {
        this.showFixedHeader();
      } else if(window.scrollY < 180 && this.show) {
        this.hideFixedHeader();
      }
    }, false);
  }

  constructor() { }

  ngOnInit(): void {
    this.initFixedShow();
  }

}
