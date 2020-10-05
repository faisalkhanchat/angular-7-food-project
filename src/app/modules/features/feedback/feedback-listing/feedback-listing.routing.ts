import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackListingComponent } from './component/feedback-listing.component';
import { FeedbackListingModule } from './feedback-listing.module';
const routes: Routes = [
    { path: '', component: FeedbackListingComponent }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedbackListingModule
    ],
    declarations: [],
    exports: []
})
export class FeedbackListingRouting { }
