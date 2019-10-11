import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
    private apiKey : string = "32715";

    private urlEmployee: string = "/rest/getcustomer/";
    private urlEmployment: string = "/rest/getemployment/";
    private urlRiskData: string = "/rest/getriskdata/";
    private urlScore: string = "/rest/getquote/quote/";
    
    constructor(private http:HttpClient) { }

    getRiskData(employeeID : string): Observable<IEmployee[]> {;
        return this.http.get<IEmployee[]>(this.urlRiskData + `${this.apiKey}/${employeeID}`);
    }

    getEmployees(employeeID : string): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.urlEmployee + `${this.apiKey}/${employeeID}`);
    }

    getEmployment(employeeID : string): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.urlEmployment + `${this.apiKey}/${employeeID}`);
    }


    getScore(employeeID : string): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.urlScore + `${this.apiKey}/${employeeID}`);
    }

    errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
}