import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiliffynumberPipe } from './miliffynumber.pipe';



@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [ 
    MiliffynumberPipe
  ],
  exports: [
    MiliffynumberPipe
  ]
})
export class MiliffynumberModule { }
