import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'employment',
    template: `
        <h2>Employment</h2>
        <ul *ngFor="let employee of employees">
            <li>Employer: {{employee.employer}}</li>
            <br>
            <li>Role: {{employee.role}}</li>
            <br>
            <li>Duration: {{employee.duration}}</li>
            <br>
            <li>CTC: {{employee.ctc}}</li>
            <br>
            <li>Contact: {{employee.contact}}</li>
        </ul>
    `,
    styles: [
        'h2 { text-align:center; }',
        'ul { list-style-type:none; }'  
    ]
})

export class EmploymentComponent implements OnInit {
    
    public employees = []
    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getEmployment().subscribe(data => this.employees = data);
    }
}