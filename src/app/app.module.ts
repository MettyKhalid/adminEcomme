import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DeleteProductModalComponent } from './components/delete-product-modal/delete-product-modal.component';
import { AddOrEditProductModalComponent } from './components/add-or-edit-product-modal/add-or-edit-product-modal.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClrAlertModule } from '@clr/angular';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { CdsModule } from '@cds/angular';

import '@cds/core/icon/register.js';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeleteProductModalComponent,
    AddOrEditProductModalComponent,
    ShowCustomersComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ClrAlertModule,
    HttpClientModule,
    CdsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
