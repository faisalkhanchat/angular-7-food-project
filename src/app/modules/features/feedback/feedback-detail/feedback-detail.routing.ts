import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackDetailModule } from './feedback-detail.module';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
const routes: Routes = [
    { path: '', component: FeedbackDetailComponent }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedbackDetailModule
    ],
    declarations: [],
    exports: []
})
export class FeedbackDetailRouting { }
