import { Component, OnInit, Input } from '@angular/core';
import { scroll } from "../../../assets/js/scroll";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() isfixed: string;
  @Input() id: string;
  @Input() type: string;

  private menu: any;
  private cta: any;
  private scrollTransition: scroll;
  private show: boolean;

  constructor() {
    this.scrollTransition = new scroll();
    this.show = false;
  }

  public toggleMenu(): void {
    let elementTarget = window.document.getElementById(this.id);
    let menu = elementTarget.querySelector(".menu\\.links");
    if (!this.show) {
      this.show = true;
      menu.className += " is-active";
    } else if (this.show) {
      this.show = false;
      menu.className = menu.className.replace("is-active", "").trim();
    }
  }

  public redirect(target: string): void {
    let elementTarget = document.querySelector(target);
    this.scrollTransition.scrollIt(elementTarget, null);
  }
  
  public setModification(): void {
    this.menu.className += " is-fixed";
    this.cta.className += " is-fixed";
  }

  public initFixedMenu(): void {
    let appmenu = document.getElementById(this.id);
    this.menu = appmenu.querySelector('.menu');
    this.cta = appmenu.querySelector(".menu\\.item__button");
    this.setModification();
  }

  public modifyModeTwo(): void {

    let fatherElementToModify = document.getElementById(this.id);
    let logo = fatherElementToModify.querySelector('.menu\\.brand img');
    let menuLink = fatherElementToModify.querySelectorAll('.menu\\.item__a');
    let menuToggle = fatherElementToModify.querySelector('.menu\\.toggle');
    menuLink.forEach(el => el.className += " is-helpMod");
    menuToggle.className += " is-helpMod";
    let newLogo = logo.getAttribute('src').replace("logo","logo-blue");
    logo.setAttribute("src", newLogo);

  }

  ngOnInit(): void {
    if(this.isfixed) this.initFixedMenu();
    if(this.type && this.type=== "help") this.modifyModeTwo();
  }

}
