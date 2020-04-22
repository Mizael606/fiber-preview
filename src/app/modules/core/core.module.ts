import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RecaptchaModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class CoreModule {}
