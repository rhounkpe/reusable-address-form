import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostalAddressComponent } from './address/components/postal-address/postal-address.component';
import { PostalAddressFormComponent } from './address/components/postal-address-form/postal-address-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostalAddressBlockComponent } from './address/components/postal-address-block/postal-address-block.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PostalAddressComponent,
    PostalAddressFormComponent,
    PostalAddressBlockComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
