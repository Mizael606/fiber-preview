import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() id: string;
  private show: boolean;
  private target: any;
  private trigger: any;
  private arrow: any;


  public showAccordion(): void {
    this.target.style['max-height'] = this.target.scrollHeight + "px";
    this.arrow.className += " is-active";
    this.show = true;
  }

  public hideAccordion(): void {
    this.target.style['max-height'] = "0";
    this.arrow.className = this.arrow.className.replace("is-active", "").trim();
    this.show = false;
  }

  public toggleAccordion(): void {
    if (this.show === false) {
      this.showAccordion();
    } else {
      this.hideAccordion();
    }
  }

  public accordionControls(): void {
    this.trigger.addEventListener('click', () => {
      this.toggleAccordion();
    }, false);
  }

  public initAccordion(): void {
    let accordion = document.getElementById(this.id);
    this.target = accordion.querySelector(".accordion\\.body");
    this.trigger = accordion.querySelector(".accordion\\.header")
    this.arrow = accordion.querySelector(".fa");
    this.accordionControls();
  }

  constructor() { 
    this.show = false;
  }

  ngOnInit(): void {
    this.initAccordion();
  }

}
