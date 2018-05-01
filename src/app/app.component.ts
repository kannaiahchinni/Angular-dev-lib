import { Component , OnInit} from '@angular/core';
import { LoaderService } from './modules/loader/loader.service';
import { ProcessflowComponent } from './modules/processflow/processflow/processflow.component';
import { ProcessflowService } from './modules/processflow/processflow.service';
import {TransferBoxComponent } from './modules/transferbox/transfer-box/transfer-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  steps:any = [];
  selected = [];
  available = [];
  constructor(public loaderService:LoaderService,public processFlowService:ProcessflowService) {}

  ngOnInit() {
    //this.loaderService.showDialog();
    this.steps =[{"label":"Draft","status":"complete"},
    {"label":"Requested","status":"active"},
    {"label":"Work In Progress ","status":"not-yet-requested"},
    {"label":"Pending Approval","status":"not-yet-requested"},
    {"label":"Ready to Dispatch","status":"not-yet-requested"},
    {"label":"Completed","status":"not-yet-requested"}];
    this.available = this.steps;
  }

  updateStages() {
    this.steps =[{"label":"Draft", "status":"complete"},
    {"label":"Requested", "status":"complete"},
    {"label":"Work In Progress ", "status":"complete"},
    {"label":"Pending Approval", "status":"active"},
    {"label":"Ready to Dispatch", "status":"not-yet-requested"},
    {"label":"Completed"," status":"not-yet-requested"}];
    this.processFlowService.updateSteps.next(this.steps);
  }

  handleEvent(data: any) {
    console.log(data);
    this.available = data.available;
    this.selected = data.selected;
  }
}
