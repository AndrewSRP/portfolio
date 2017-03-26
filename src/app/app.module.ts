import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {PageIntroComponent} from "./page/intro/page-intro.component";
import {PageConnectComponent} from "./page/connect/page-connect.component";
import {PageTechComponent} from "./page/tech/page-tech.component";
import {PageProjectComponent} from "./page/project/page-project.component";
import {PageHeaderComponent} from "./page/header/page-header.component";
import {ItemCardComponent} from "./item/card/item-card.component";
import {ItemPortComponent} from "./item/port/item-port.component";
import {PageSubformComponent} from "./page/subform/page-subform.component";
import {ConnectInfoService} from "./item/connectinfo/connectinfo.service";
import {PageFooterComponent} from "./page/footer/page-footer.component";
import {ItemConnectComponent} from "./item/connect/item-connect.component";

@NgModule({
  declarations: [
    AppComponent,
    PageIntroComponent,
    PageConnectComponent,
    PageTechComponent,
    PageProjectComponent,
    PageHeaderComponent,
    PageSubformComponent,
    PageFooterComponent,
    ItemCardComponent,
    ItemPortComponent,
    ItemConnectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    JsonpModule
  ],
  providers: [ConnectInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
