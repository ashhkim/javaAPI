import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { personalInfoComponent } from './personalInfo/personalInfo.component';
import { EmploymentComponent } from './employment/employment.component';
import { RiskAnalysisComponent } from './riskAnalysis/riskAnalysis.component';
import { ScoreComponent } from './score/score.component';

import { NgxGaugeModule } from 'ngx-gauge';
import { CasePoolComponent } from './case-pool/case-pool.component';
import { ToolsComponent } from './tools/tools.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component'


@NgModule({
  declarations: [
    AppComponent,
    personalInfoComponent,
    EmploymentComponent,
    RiskAnalysisComponent,
    ScoreComponent,
    CasePoolComponent,
    ToolsComponent,
    HomeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGaugeModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
