import { Component, OnInit } from '@angular/core';
import { scroll } from "../../../assets/js/scroll"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private scrollClass: scroll;
  constructor() { }

  public redirect(target: string): void {

    let targetEl = document.querySelector(target);
    this.scrollClass.scrollIt(targetEl, null)

  }

  ngOnInit(): void {
    this.scrollClass = new scroll();
  }

}
