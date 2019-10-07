import { Component, ElementRef } from '@angular/core';
import { ScoreComponent } from './score/score.component';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'javaAPI';
  title_active = false;

  highlightThatShit(ele: ElementRef){
    this.title_active = !this.title_active;
  }
}
