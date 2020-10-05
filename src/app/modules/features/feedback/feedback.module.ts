import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { RouterModule } from '@angular/router';
import { FeedbackRouting } from './feedback.routing';

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    FeedbackRouting,
    RouterModule
  ]
})
export class FeedbackModule { }
