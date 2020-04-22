import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  exports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class CoreModule {}
