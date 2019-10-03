import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'score',
    templateUrl: './score.component.html',
    styles: [
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