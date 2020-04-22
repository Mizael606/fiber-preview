import { Component, OnInit, Input } from '@angular/core';
import { Modal } from "../../../../assets/js/modal";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id: string;
  private modalClass: Modal;

  public hideModal(): void {
    this.modalClass.hideModal(this.id);
  }

  constructor() {
    this.modalClass = new Modal();
  }  

  ngOnInit(): void {
  }

}
