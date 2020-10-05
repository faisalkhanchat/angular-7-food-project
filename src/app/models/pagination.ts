import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';

export class Pagination {
    API_EVENT = {
        ACTIVE: 'UNBLOCK',
        INACTIVE: 'BLOCK',
        DELETED: 'DELETED',
    };
    limit: number;
    total: number;
    page: number;
    pageSize: number;
    search: string;
    pageOptions: number[];
    filterOptions: { [key: string]: string | Date };
    sortKey: string;
    sortType: number;
    // @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor() {
        this.total = 0;
        this.page = 1;
        this.pageSize = 10;
        this.pageOptions = [10, 25, 50, 100];
    }

    get pageParams() {
        return {
            page: this.page,
            limit: this.pageSize
        };
    }

    get searchFilter() {
        return { search: this.search };
    }

    get sortHeaders() {
        let key = this.sortKey;
        let obj = {}
        if (key) {
            obj['sort'] = JSON.stringify({ [this.sortKey]: this.sortType })
        }
        console.log()
        return obj;
    }

    confirmPageReload() {
    }

    allPrams() {
        return {
            ...this.pageParams,
            ...this.filterOptions,
            ...this.searchFilter,
            ...this.sortHeaders
        };
    }

    /**
     * @description This function checks if page needs to be decreased on row deletion
     */
    validateDeletion() {
        if (this.total !== 1 && (this.total - ((this.page - 1) * this.pageSize)) === 1) {
            this.page--;
            this.total--;
        }
    }


    get validPageOptions() {
        const dataObj = this.allPrams();
        const mainOption = {};
        for (const i of Object.keys(dataObj)) {
            if (dataObj[i] || dataObj[i] === 0) {
                mainOption[i] = dataObj[i];
            }
        }
        return mainOption;
    }

    set pageOptionsOnChange(options: MatPaginator) {
        this.page = options.pageIndex + 1;
        this.pageSize = options.pageSize;
    }

    set sortOptions(sortOption: Sort) {
        if (sortOption.direction) {
            this.sortKey = sortOption.active;
            this.sortType = sortOption.direction === 'asc' ? (1) : (-1);
        } else {
            this.sortKey = null;
            this.sortType = null;
        }
    }

    currentIndex(index: number): number {
        return ((this.page - 1) * this.pageSize) + index + 1;
    }
    resetPages() {
        this.total = 0;
        this.page = 1;
        // console.log(this.paginator, '-----------------');
        // this.paginator.pageIndex = 0;
    }
    getSerialNumber(i) {
        return i + ((this.validPageOptions['page'] - 1) * this.validPageOptions['limit']);
    }
}