import {Component, OnInit} from '@angular/core';
import {scroll} from '../../../assets/js/scroll';
import jQuery from 'jquery';
import 'slick-carousel';

@Component({
 selector: 'app-depoiments',
 templateUrl: './depoiments.component.html',
 styleUrls: ['./depoiments.component.css'],
})
export class DepoimentsComponent implements OnInit {
 private scrollIT: scroll;
 public slideConfig: any;
 public slideConfigText: any;

 constructor() {
  this.scrollIT = new scroll();
  this.slideConfigText = {
   slidesToShow: 1,
   slidesToScroll: 1,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 12000,
   prevArrow: '#prev',
   nextArrow: '#next',
   asNavFor: '#slidesimages',
  };
  this.slideConfig = {
   slidesToShow: 3,
   slidesToScroll: 1,
   infinite: true,
   centerMode: true,
   autoplay: true,
   autoplaySpeed: 12000,
   asNavFor: '#slidestext',
   prevArrow: '#prev',
   nextArrow: '#next',
   responsive: [
    {
     breakpoint: 640,
     settings: {
      slidesToShow: 1,
     },
    },
   ],
  };
 }

 public redirect(goTo: number): void {
  this.scrollIT.scrollIt(goTo, null);
 }

 ngOnInit(): void {
  let $ = jQuery;
  $(() => {
   $('#slidesimages').slick(this.slideConfig);
   $('#slidestext').slick(this.slideConfigText);
  });
 }
}
