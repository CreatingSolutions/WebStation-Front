import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HeaderModule} from './ui/header/header.module';
import {FooterModule} from './ui/footer/footer.module';
import {HomepageModule} from './pages/homepage/homepage.module';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {HeaderComponent} from './ui/header/header.component';
import {FooterComponent} from './ui/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HomepageModule,
    HeaderModule,
    FooterModule
  ],
  bootstrap: [HeaderComponent, HomepageComponent, FooterComponent]
})
export class AppModule { }
