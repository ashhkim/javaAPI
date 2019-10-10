import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'personalInfo',
    templateUrl: './personalInfo.component.html',
    styles: [
                'ul { list-style-type:none; }'    
            ]
})

export class personalInfoComponent implements OnInit {
    
    public employees = [];
    public user_id : string = "4";

    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getEmployees(this.user_id).subscribe(data => this.employees = data);
    }

    
}

