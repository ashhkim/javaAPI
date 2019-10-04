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
    UWGaugeVal = 0;
    UWLabel = "UW Point";

    FICOGaugeVal = 800;
    FICOLabel = "FICO";

    size= window.innerWidth / 7.5;

    thickness = 10;

    FICOmax = 850;
    FICOmin = 300;

    UWmax = 10;
    UWmin = 0;
    
    cap="round";

    thresholdConfig = {
        '0': {color: '#c0392b'},
        '630': {color: '#e67e22'},
        '690': {color: '#f1c40f'},
        '720': {color: '#2ecc71'}
    };

    constructor(private _employeeService: EmployeeService){ }
    
    ngOnInit(){
        this._employeeService.getScore().subscribe(data => { 
            this.employee_score = data; 
            // this.FICOGaugeVal = this.employee_score[0].ficoScore;
            this.UWGaugeVal = this.employee_score[0].uwPointNumer;
        });
    }

    resizeGauge() {
        this.size = window.innerWidth / 7.5;
    }
}