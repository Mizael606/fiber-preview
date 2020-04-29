import { Component, OnInit } from '@angular/core';
import { scroll } from '../../../assets/js/scroll';

@Component({
  selector: 'app-how-work',
  templateUrl: './how-work.component.html',
  styleUrls: ['./how-work.component.css'],
})
export class HowWorkComponent implements OnInit {
  private scrollIT: scroll;

  constructor() {
    this.scrollIT = new scroll();
  }

  public redirect(goTo: number): void {
    this.scrollIT.scrollIt(goTo, null);
  }

  ngOnInit(): void {}
}
