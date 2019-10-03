import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'riskAnalysis',
    template: `
        <h2>Risk Analysis</h2>
        <ul *ngFor="let employee of employees">
            <li>Case #: {{employee.caseNum}}</li>
            <br>
            <li>Existing CC Record: {{employee.existingCcRecord}}</li>
            <br>
            <li>Debt/Income: {{employee.debtOverIncome}}</li>
            <br>
            <li>Payment/Income: {{employee.paymentOverIncome}}</li>
            <br>
            <li>Probability to Default: {{employee.probabilityToDefault}}</li>
            <br>
            <li>Risk Factor: {{employee.riskFactor}}</li>
        </ul>
    `,
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