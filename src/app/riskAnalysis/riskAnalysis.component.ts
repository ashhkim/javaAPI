import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'riskAnalysis',
    templateUrl: './riskAnalysis.component.html',
    styleUrls: ["riskAnalysis.component.scss"]
})

export class RiskAnalysisComponent implements OnInit {
    
    public employees = []
    public user_id : string = "4";

    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getRiskData(this.user_id).subscribe(data => this.employees = data);
    }
}