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
    public user_id : string = "4";

    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getEmployment(this.user_id).subscribe(data => this.employees = data);
    }
}