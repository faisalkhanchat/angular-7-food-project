import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFilesComponent } from './component/input-files.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [InputFilesComponent],
  exports: [
    InputFilesComponent
  ]
})
export class InputFilesModule { }
