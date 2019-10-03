import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'personalInfo',
    template: `
        <ul *ngFor="let employee of employees">
            <li>Name: {{employee.firstName}} {{employee.lastName}}</li>
                <br>
            <li>Guardian: {{employee.guardianName}}</li>
                <br>
            <li>Date of Birth: {{employee.dob}}</li>
                <br>
            <li>Address: {{employee.address}}</li>
                <br>
            <li>Contact: {{employee.contact}}</li>
        </ul>
    `,
    styles: ['h2 { text-align:center; }',
                'ul { list-style-type:none; }'    
            ]
})

export class personalInfoComponent implements OnInit {
    
    public employees = [];
    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getEmployees().subscribe(data => this.employees = data);
    }

    
}

