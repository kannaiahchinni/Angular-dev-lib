import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from './loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class LoaderModule { 
  public static forRoot(): ModuleWithProviders {
        return {
          ngModule: LoaderModule,
          providers: [
            LoaderService
          ]
        };
      }
}
