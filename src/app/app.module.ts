import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamComponent } from './team/team.component';
import { NavComponent } from './nav/nav.component';
import { TaxcalculatorComponent } from './taxcalculator/taxcalculator.component';
import { BillmanagerComponent } from './billmanager/billmanager.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    NavComponent,
    TaxcalculatorComponent,
    BillmanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
