import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-content-management',
    templateUrl: './content-management.component.html',
    styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {
    contentTabs = [
        {tabName: 'Privacy Policy'},
        {tabName: 'Term and Conditions'},
        {tabName: 'Privacy Policy'},
    ];
    selectedTab: Observable<any>;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.bindToQuery();
    }

    /**
     * Bind and focus the tab which was set before unload
     */
    bindToQuery() {
        this.activatedRoute.queryParams.subscribe(
            query => {
                this.selectedTab = query.tab;
            }
        );
    }

    /**
     * On tab change, append query param in route
     * @param event MatTabChangeEvent
     */
    onTabChange(event: MatTabChangeEvent) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                tab: event.index
            },
            queryParamsHandling: 'merge',
        });
    }

}
