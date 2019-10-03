import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'score',
    template: `
        <ul *ngFor="let employee of employees">
            <li>Quote: {{employee.quote}}</li>
            <br>
            <li>UW Point: {{employee.uwPointNumer}}/{{employee.uwPointDenom}}</li>
            <br>
            <li>FICO: {{employee.ficoScore}}</li>
        </ul>
    `,
    styles: [
        'h2 { text-align:center; }',
        'ul { list-style-type:none; }'  
    ]
})

export class ScoreComponent implements OnInit {
    
    public employees = []
    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getScore().subscribe(data => this.employees = data);
    }
}