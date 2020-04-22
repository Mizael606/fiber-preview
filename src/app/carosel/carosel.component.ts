import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {
  @Input() id: string;
  @Input() itemsByPages: string;
  @Input() centerTarget: string;
  @Input() prevTrigger: string;
  @Input() nextTrigger: string;

  private parentElement: HTMLElement;
  private carouselElement: any;
  private carouselElementRails: any;
  private carouselElementItems: any;
  private pageDimension: number;
  private pageCount: number;
  private isMobile: boolean;

  public setAutoplay(): void {
    setInterval(() => {
      this.next();
    }, 8000);
  }

  public setCenter(): void {
    if (this.isMobile) return;
    let actualPosition: number = (parseInt(this.centerTarget) + this.pageCount) - 1;
    let actualCenter = this.carouselElementRails.querySelector(".carousel\\.center");
    actualCenter.className = actualCenter.className.replace("carousel.center", "").trim();
    this.carouselElementItems[actualPosition].className += " carousel.center";
  }

  private next(): void {
    this.pageCount += 1;
    if (this.pageCount >= this.carouselElementItems.length || this.pageCount > (this.carouselElementItems.length - parseInt(this.itemsByPages))) this.pageCount = 0;
    this.setCenter();
    this.carouselElementRails.style.transform = `translateX(-${(this.pageCount * this.pageDimension)}px)`;
  }  

  private prev(): void {
    this.pageCount -= 1;
    if (this.pageCount < 0) this.pageCount = (this.carouselElementItems.length - parseInt(this.itemsByPages));
    this.setCenter();
    this.carouselElementRails.style.transform = `translateX(-${(this.pageCount * this.pageDimension)}px)`;
  }

  public trackEvents(): void {
    window.document.querySelector(this.nextTrigger).addEventListener('click', () => {
      this.next();
    }, false);

    window.document.querySelector(this.prevTrigger).addEventListener('click', () => {
      this.prev();
    }, false);

    this.setAutoplay();
  }

  public defineWidthOfItems(width: number, resize): void {
    this.carouselElementRails.style.width = Math.floor( this.carouselElementItems.length * width ) + "px";
    this.carouselElementItems.forEach((element, i) => {
      if ((parseInt(this.centerTarget) - 1) === i && !this.isMobile && !resize) {
        element.className += " carousel.center"
      }
      element.style.width = width+"px";
    });

    this.pageDimension = width;
    if(!resize) this.pageCount = 0;
  }

  public initDimension(resize): void {

    let width = this.carouselElement.getBoundingClientRect().width;
    if (this.isMobile) this.itemsByPages = "1";
    let itemsWidth: number = Math.floor(width / parseInt(this.itemsByPages));
    this.defineWidthOfItems(itemsWidth, resize);

  }

  public initInformations(): void {

    this.parentElement = document.getElementById(this.id);
    this.carouselElement = this.parentElement.children[0];
    this.carouselElementRails = this.carouselElement.querySelector(".carousel\\.rails");
    this.carouselElementItems = this.carouselElement.querySelectorAll(".carousel\\.rails > *");
    if (parseInt(this.itemsByPages) > 1 && !this.isMobile) {
      let lastElement = this.carouselElementItems[0].cloneNode(true);
      let firstElement = this.carouselElementItems[(this.carouselElementItems.length - 1)].cloneNode(true);
      this.carouselElementRails.appendChild(lastElement);
      this.carouselElementItems[0].parentNode.insertBefore(firstElement, this.carouselElementItems[0]);
      this.carouselElementItems = this.carouselElement.querySelectorAll(".carousel\\.rails > *");
    }
    this.initDimension(false);
    window.addEventListener('resize', () => {
      // this.pageCount = 0;
      this.initDimension(true);
      this.checkIsMobile();
    },);
    this.trackEvents();

  } 

  public checkIsMobile(): void {
    ((a) => {if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) this.isMobile = true;})(navigator.userAgent||navigator.vendor);
  }

  constructor() {
    this.isMobile = false;
    this.checkIsMobile();
   }

  ngOnInit(): void {
    this.initInformations();
  }

}
