import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
    selector: 'score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss']
})

export class ScoreComponent implements OnInit {
    public employee_score = [];
    
    gaugeType = "full";
    UWGaugeVal = 1/2;
    UWLabel = "UW Point";

    FICOGaugeVal = 500;
    FICOLabel = "FICO";

    size= window.innerWidth / 7.5;

    thickness = 10;

    max = 850;
    min = 300;

    cap="round";

    thresholdConfig = {
        '0': {color: 'conic-gradient(red, blue)'},
        '630': {color: 'red'},
        '690': {color: '#2ecc71'},
        '720': {color: '#27ae60'}
    };

    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getScore().subscribe(data => { 
            this.employee_score = data; 
            // this.FICOGaugeVal = this.employee_score[0].ficoScore;
        });
    }
}