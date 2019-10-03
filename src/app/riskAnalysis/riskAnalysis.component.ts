import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'riskAnalysis',
    templateUrl: './riskAnalysis.component.html',
    styles: [
        'h2 { text-align:center; }',
        'ul { list-style-type:none; }'  
    ]
})

export class RiskAnalysisComponent implements OnInit {
    
    public employees = []
    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getRiskData().subscribe(data => this.employees = data);
    }
}