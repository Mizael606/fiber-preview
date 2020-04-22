import { Component, OnInit } from '@angular/core';
import { scroll } from "../../../assets/js/scroll";

@Component({
  selector: 'app-depoiments',
  templateUrl: './depoiments.component.html',
  styleUrls: ['./depoiments.component.css']
})
export class DepoimentsComponent implements OnInit {

  private scrollIT: scroll;

  constructor() { 
    
    this.scrollIT = new scroll();

  }

  public redirect(goTo: number): void {
    this.scrollIT.scrollIt(goTo, null);
  }

  ngOnInit(): void {
  }

}
