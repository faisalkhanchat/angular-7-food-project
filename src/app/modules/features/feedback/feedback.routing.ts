import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { FEEDBACK_LIST, FEEDBACK_DETAIL } from 'src/app/constant/routes/routes';
import { HOME_GUARD } from '../../../constant/route-guards/route-guards';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '', component: FeedbackComponent, children: [
            { path: '', redirectTo: FEEDBACK_LIST, pathMatch: 'full' },
            { path: FEEDBACK_LIST, loadChildren: './feedback-listing/feedback-listing.routing#FeedbackListingRouting', ...HOME_GUARD },
            { path: FEEDBACK_DETAIL, loadChildren: './feedback-detail/feedback-detail.routing#FeedbackDetailRouting', ...HOME_GUARD },
        ]
    },
];

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
    exports: [RouterModule]
})
export class FeedbackRouting {

}

