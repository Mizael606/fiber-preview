import { Component, OnInit } from '@angular/core';
import { scroll } from '../../../assets/js/scroll';

@Component({
  selector: 'app-lowest-rates',
  templateUrl: './lowest-rates.component.html',
  styleUrls: ['./lowest-rates.component.css'],
})
export class LowestRatesComponent implements OnInit {
  private scrollIT: scroll;

  constructor() {
    this.scrollIT = new scroll();
  }

  public redirect(goTo: number): void {
    this.scrollIT.scrollIt(goTo, null);
  }

  ngOnInit(): void {}
}
