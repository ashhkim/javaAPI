import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'employment',
    templateUrl: './employment.component.html',
    styles: [
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