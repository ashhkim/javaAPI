import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
    private urlEmployee: string = "/assets/data/customer_personal.json";
    private urlEmployment: string = "/assets/data/customer_employment.json";
    private urlRiskData: string = "/assets/data/customer_riskdata.json";
    private urlScore: string = "/assets/data/customer_quote.json";
    
    constructor(private http:HttpClient) { }

    getEmployees(): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.urlEmployee);
    }

    getEmployment(): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.urlEmployment);
    }

    getRiskData(): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.urlRiskData);
    }

    getScore(): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.urlScore);
    }

    errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
}