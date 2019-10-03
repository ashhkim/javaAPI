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



@NgModule({
  declarations: [
    AppComponent,
    personalInfoComponent,
    EmploymentComponent,
    RiskAnalysisComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
