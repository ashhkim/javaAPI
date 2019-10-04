import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss']
})

export class ScoreComponent implements OnInit {
    
    public employee_score = [];
    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getScore().subscribe(data => { this.employee_score = data; console.log(data)});
        // console.log(data);
    }
}