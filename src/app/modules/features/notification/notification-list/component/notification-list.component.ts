import { Component, OnInit } from '@angular/core';
import { NotificationListService } from '../service/notification-list.service';
import { Pagination } from '../../../../../models/pagination';
import { FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss', '../../../../../components/mat-table-rendered/mat-table-rendered.component.scss'],
  providers: []
})
export class NotificationListComponent extends Pagination implements OnInit {

  notificationListingForm: FormGroup;
  showFilter = false;
  displayedColumns: string[] = ['position', 'title', 'body', 'platform', 'createdOn', 'scheduleOn', 'status', 'action'];
  notificationList = new MatTableDataSource<any>();
  minDate: Date;
  minSchedulDate: Date;
  filterObject: any;
  constructor(private _notificationListService: NotificationListService) {
    super();
    this.notificationList = new MatTableDataSource([]);
    this.notificationListingForm = this._notificationListService.getFilterForm();
  }

  ngOnInit() {
    this.filterObject = this._notificationListService.createFilterObject(this.notificationListingForm);
    this.fetchNotificationList();
  }

  fetchNotificationList() {
    console.log(this.validPageOptions);
    let data = { ...this.notificationListingForm.value, ...this.validPageOptions };
    console.log(data);
    this._notificationListService.getNotificationListing(data).subscribe(
      (response: any) => {
        console.log(response);
        response.data.data.forEach(
          item => {
            item['status'] = new Date(item.scheduleOn).getTime() <= new Date().getTime() ? 'Sent' : 'Drafted';
          }
        )
        this.notificationList = new MatTableDataSource(response.data.data);
        this.total = response.data.total;
      }, err => { }
    )
  }
  /*
    Method For Sorting
  */
  sortData(event) {
    console.log(event)
    this.sortOptions = event;
    this.resetPages();
    this.fetchNotificationList();

  }
  /*
    Method For Changing The Pagination
  */
  changePage(event: MatPaginator) {
    console.log(event)
    this.pageOptionsOnChange = event;
    if (this.total == 0) {
      return;
    }
    this.fetchNotificationList();
  }
  /*
    Method For Searching
  */
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.fetchNotificationList();
  }
  /*
    Method For Checking Filter Button Shoud Be Enable Or Not
  */
  disable() {
    return !this.notificationListingForm.dirty;
  }
  /*
    Method For Resetting The Filters
  */
  resetFilter() {
    this.minDate = null;
    this.minSchedulDate = null;
    this.notificationListingForm.reset();
    this.resetPages();
    this.fetchNotificationList();
  }
  /*
    Method For Applying The Filters
  */
  filter() {
    this.resetPages();
    this.fetchNotificationList();
  }

  deleteNotification(notificationId) {
    const body = {
      status: 'DELETED',
      notificationId: notificationId,
      isDeleted: true
    }
    this._notificationListService.changeStatus(body).subscribe(
      data => {
        if (data) {
          this.fetchNotificationList();
        }
      }
    )
  }
}



