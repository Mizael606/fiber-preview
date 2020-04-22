import { Component, OnInit } from '@angular/core';
import { scroll } from "../../../assets/js/scroll"
import { FormBuilder, Validators } from '@angular/forms';
import { Modal } from "../../../assets/js/modal";
import VMaker from "vanilla-masker";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Lottie from "lottie-web";
import { animation } from "../../../assets/js/thanks.js"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  private scrollClass: scroll;
  private modalClass: Modal;

  newsletter = this.fb.group({
    name: ['', Validators.required],
    email: ['', {
      validators: this.emailValidator(),
      updateOn: "blur"
    }]
  });

  message = this.fb.group({
    name: ['', Validators.required],
    email: ['', {
      validators: this.emailValidator(),
      updateOn: "blur"
    }],
    phone: ['', Validators.required],
    message: ['', Validators.required],
    captcha: ['', Validators.required]
  });

  public emailValidator(): any {    
    return control => {
      if(!control.value) return {name: "emailEmpty"};
      let email = control.value;
      let regExp = /(\w)+(\@)+(\w)+(\.){1}(\w){3,4}((\.){1}(\w){2}){0,1}/g;
      if (!regExp.test(email)) {
        return ({
          name: "emailInvalid",
          email: email
        })
      }
      return null;
    }
  }

  private clearControls(): boolean {
    this.message.get('name').setValue('');
    this.message.get('email').setValue('');
    this.message.get('phone').setValue('');
    this.message.get('message').setValue('');
    return true;
  }

  public makeAnimation(): any {
    let animationWithlottie = Lottie.loadAnimation({
      container: window.document.getElementById(`thanksfooter`),
      renderer: 'canvas',
      autoplay: true,
      animationData: animation,
      loop: false
    });

    return animationWithlottie;
  }

  public hideThanksElement(animation):void {
    let thanks = document.querySelector('.footer\\.thanks');
    thanks.className = thanks.className.replace("scale-in-center", "").trim();
    animation.destroy();
    this.modalClass.hideModal('contato');
  }

  public showThanksElement():void {
    let thanks = document.querySelector('.footer\\.thanks');
    thanks.className += " scale-in-center"
    setTimeout(() => {
      let animation = this.makeAnimation();
      setTimeout(() => {
        this.hideThanksElement(animation);
      }, 7000);
    }, 900);
  }

  public sendMessage(): void {
    let url = `https://www.fibercash.com.br/api/send_email.php?no-cache-415614555`;
    let form = `name=${this.message.get('name').value}&email=${this.message.get('email').value}&phone=${this.message.get('phone').value}&message=${this.message.get('message').value}`;

    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    headers.set('Accept', 'application/json');
    this.http.post(url, encodeURI(form), {
      headers: headers
    }).subscribe(data => {
      if(this.clearControls()) {
        this.showThanksElement();
      }
    });
  }

  public sendNewsletter(): void {
    let url = `https://www.fibercash.com.br/api/send_email.php?no-cache-415614555`;
    let form = `name=${this.newsletter.get('name').value}&email=${this.newsletter.get('email').value}&phone=Não Informado&message=Novo cadastro da newsletter.`;

    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    headers.set('Accept', 'application/json');
    this.http.post(url, encodeURI(form), {
      headers: headers
    }).subscribe(data => {
      this.newsletter.get('name').setValue('');
      this.newsletter.get('email').setValue('');
      document.querySelector('.footer\\.newsletter_success').className = document.querySelector('.footer\\.newsletter_success').className.replace("hidden","").trim();
    });
  }

  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.modalClass = new Modal();
  }

  public showModal(id: string): void {
    this.modalClass.showModal(id);
  }

  public redirect(target: string): void {

    let targetEl = document.querySelector(target);
    this.scrollClass.scrollIt(targetEl, null)

  }

  public resolved(captcha: string): void {
    this.message.get('captcha').setValue(captcha);
  }

  ngOnInit(): void {
    this.scrollClass = new scroll();
    VMaker(document.querySelector('#phonefooter')).maskPattern("(99) 9 9999-9999");    
  }

}
