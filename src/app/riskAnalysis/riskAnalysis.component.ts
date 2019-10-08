import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'riskAnalysis',
    templateUrl: './riskAnalysis.component.html',
    styleUrls: ["riskAnalysis.component.scss"]
})

export class RiskAnalysisComponent implements OnInit {
    
    public employees = []
    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getRiskData().subscribe(data => this.employees = data);
    }
}