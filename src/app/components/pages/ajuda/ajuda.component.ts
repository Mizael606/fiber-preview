import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {

  public headerFixed: any;
  public show: boolean;

  constructor() { }

  public showFixedHeader(): void {
    this.show = true;
    this.headerFixed.className += " is-active";
  }

  public hideFixedHeader(): void {
    this.show = false;
    this.headerFixed.className = this.headerFixed.className.replace("is-active", "").trim();
  }

  public initFixedShow():void {
    this.headerFixed = document.querySelector(".helpPage\\.fixed");
    this.show = false;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 180 && !this.show) {
        this.showFixedHeader();
      } else if(window.scrollY < 180 && this.show) {
        this.hideFixedHeader();
      }
    }, false);
  }

  ngOnInit(): void {
    this.initFixedShow();
  }

}
