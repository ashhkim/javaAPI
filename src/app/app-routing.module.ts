import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { CasePoolComponent } from './case-pool/case-pool.component';
import { ToolsComponent } from './tools/tools.component';


const routes: Routes = [
  {path: '', component: HomeDashboardComponent},
  {path: 'dashboard', component: HomeDashboardComponent},
  {path: 'cases', component: CasePoolComponent},
  {path: 'tools', component: ToolsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
