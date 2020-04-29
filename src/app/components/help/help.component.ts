import { Component, OnInit } from '@angular/core';
import { scroll } from '../../../assets/js/scroll';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit {
  private scrollIT: scroll;

  constructor() {
    this.scrollIT = new scroll();
  }

  public redirect(goTo: number): void {
    this.scrollIT.scrollIt(goTo, null);
  }

  ngOnInit(): void {}
}
