import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { LoaderModule } from './modules/loader/loader.module';
import { LoaderService} from './modules/loader/loader.service';
import { ProcessflowModule} from './modules/processflow/processflow.module';
import { TransferboxModule } from './modules/transferbox/transferbox.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CommonModule, LoaderModule, BrowserModule, ProcessflowModule, TransferboxModule],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
