export class Modal {

  private show: boolean;
  private id: string;

  constructor() {}
  

  public showModal(id: string): void {
    this.show = true;
    this.id = id;
    let elementModal = document.getElementById(this.id);
    let blur = elementModal.querySelector('.Modal\\.blur');
    let modal = elementModal.querySelector('.Modal');
    blur.className += " is-show";
    modal.className += " slide-in-blurred-top";
  }

  public hideModal(id: string): void {

    this.show = false;
    this.id = id;
    let elementModal = document.getElementById(this.id);
    let blur = elementModal.querySelector('.Modal\\.blur');
    let modal = elementModal.querySelector('.Modal');
    blur.className = blur.className.replace("is-show", "").trim();
    modal.className = modal.className.replace("slide-in-blurred-top", "").trim();

  }

  public toggle(id: string): void {
    this.id = id;
    if ( !this.show ) {
      this.showModal(id);
    } else {
      this.hideModal(id);
    }
  }

}
