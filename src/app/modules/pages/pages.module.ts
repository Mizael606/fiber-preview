import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule
  ]
})
export class PagesModule { }
