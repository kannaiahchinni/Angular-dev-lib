import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ProcessflowService } from '../processflow.service';

@Component({
  selector: 'app-processflow',
  templateUrl: './processflow.component.html',
  styleUrls: ['./processflow.component.css']
})
export class ProcessflowComponent implements OnInit {

  @Input() stages: any = [];
  noOfStages: number;
  error: any = false;

  constructor(public processFlowService: ProcessflowService) { }
  
  ngOnInit() {
    if (this.stages instanceof Array && this.stages.length > 0) {
      this.noOfStages = this.stages.length;
    } else {
      this.error = true;
    }
    this.initStepWatcher();
  }

  initStepWatcher() {
    this.processFlowService.updateSteps.subscribe(newStages => {
      this.stages = newStages;
    });
  }
}
