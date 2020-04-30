import {NgModule, Optional, SkipSelf} from '@angular/core';

import {CoreModule} from './modules/core/core.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MenuComponent} from './components/menu/menu.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AjudaComponent} from './components/pages/ajuda/ajuda.component';
import {SearchComponent} from './components/search/search.component';
import {HowWorkComponent} from './components/how-work/how-work.component';
import {LowestRatesComponent} from './components/lowest-rates/lowest-rates.component';
import {DepoimentsComponent} from './components/depoiments/depoiments.component';
import {WhatsappComponent} from './components/whatsapp/whatsapp.component';
import {HelpComponent} from './components/help/help.component';
import {AccordionComponent} from './components/accordion/accordion.component';
import {ItemsComponent} from './components/pages/ajuda/items/items.component';
import {ModalComponent} from './components/pages/modal/modal.component';

@NgModule({
 declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  MenuComponent,
  HomeComponent,
  AjudaComponent,
  SearchComponent,
  HowWorkComponent,
  LowestRatesComponent,
  DepoimentsComponent,
  WhatsappComponent,
  HelpComponent,
  AccordionComponent,
  ItemsComponent,
  ModalComponent,
 ],
 imports: [CoreModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {
 constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  if (parentModule) {
   throw new Error('Module core somente no modulo app.');
  }
 }
}
