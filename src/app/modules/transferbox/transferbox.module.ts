import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferBoxComponent } from './transfer-box/transfer-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[TransferBoxComponent],
  declarations: [TransferBoxComponent]
})
export class TransferboxModule {}
