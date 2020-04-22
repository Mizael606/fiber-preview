import { Component, OnInit } from '@angular/core';
import { Modal } from "../../../../../assets/js/modal";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  private modalClass: Modal;

  constructor() {
    this.modalClass = new Modal();
  }

  public showModal(id: string): void {
    this.modalClass.showModal(id);
  }

  ngOnInit(): void {
  }

}
