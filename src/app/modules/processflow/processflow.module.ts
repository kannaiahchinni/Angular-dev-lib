import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessflowComponent } from './processflow/processflow.component';
import { ProcessflowService } from './processflow.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProcessflowComponent],
  exports: [ProcessflowComponent],
})
export class ProcessflowModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProcessflowModule,
      providers: [
        ProcessflowService
      ]
    };
  }
 }
