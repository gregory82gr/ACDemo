import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './ngc/btn/btn.component';
import { FancyBtnComponent } from './ngc/fancy-btn/fancy-btn.component';
import { CardComponent } from './ngc/card/card.component';
import { NgcComponent } from './ngc/ngc.component';
import { CustomerListComponent } from './InputOutputExample/customer-list/customer-list.component';
import { CustomerDetailComponent } from './InputOutputExample/customer-detail/customer-detail.component';
import { ChildComponent } from './ViewChildExample/child/child.component';
import { ParentComponent } from './ViewChildExample/parent/parent.component';
import { ForComponent } from './Angular17Examples/for/for.component';
import { SignalComponent } from './Angular17Examples/signal/signal.component';
import { SignalReceiverComponent } from './Angular17Examples/signal-receiver/signal-receiver.component';
import { PhotoAppComponent } from './Angular17Examples/Standalone/photo-app/photo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    FancyBtnComponent,
    CardComponent,
    NgcComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    ChildComponent,
    ParentComponent,
    ForComponent,
    SignalComponent,
    SignalReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PhotoAppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
