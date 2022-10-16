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
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    NavComponent,
    TaxcalculatorComponent,
    BillmanagerComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
