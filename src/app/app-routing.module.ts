import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillmanagerComponent } from './billmanager/billmanager.component';
import { TaxcalculatorComponent } from './taxcalculator/taxcalculator.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: TaxcalculatorComponent
  },
  {
    path: 'billmanager',
    component: BillmanagerComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
