import { Component, OnInit } from '@angular/core';
import { Modal } from '../../../../assets/js/modal';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css'],
})
export class AjudaComponent implements OnInit {
  public headerFixed: any;
  public modalClass: Modal;
  public show: boolean;

  constructor(private router: Router) {
    this.modalClass = new Modal();
  }

  public showFixedHeader(): void {
    this.show = true;
    this.headerFixed.className += ' is-active';
  }

  public showModal(id: string): void {
    this.modalClass.showModal(id);
  }

  public hideFixedHeader(): void {
    this.show = false;
    this.headerFixed.className = this.headerFixed.className
      .replace('is-active', '')
      .trim();
  }

  public initFixedShow(): void {
    this.headerFixed = document.querySelector('.helpPage\\.fixed');
    this.show = false;
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 180 && !this.show) {
          this.showFixedHeader();
        } else if (window.scrollY < 180 && this.show) {
          this.hideFixedHeader();
        }
      },
      false
    );
  }

  ngOnInit(): void {
    this.initFixedShow();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
