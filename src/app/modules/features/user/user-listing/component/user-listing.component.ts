import { Component, OnInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserListingService } from '../service/user-listing.service';
import { Pagination } from '../../../../../models/pagination';
import { FormGroup } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss', '../../../../../components/mat-table-rendered/mat-table-rendered.component.scss'],
  providers: []
})
export class UserListingComponent extends Pagination implements OnInit {

  showFilter = false;
  userListingForm: FormGroup;


  // This is a array of mat-table columns

  displayedColumns: string[] = [
    'select', 'id', 'profilePicture', 'fullName','email', 'createdOn', 'phone', 'planType', 'status'
  ];

  /**  We are using user-listing component in the notification page too so there is a option of multi select in 
       notifications. We will toggle that option on the basis of this variable.
  **/

  @Input() isNotification = false;

  userList: MatTableDataSource<User.UserList>;
  selection = new SelectionModel<User.UserList>(true, []);
  minDate: Date;
  filterObject;
  


  constructor(
    private _userListingService: UserListingService
  ) {
    super();
    this.userList = new MatTableDataSource([]);
    this.userListingForm = this._userListingService.getFilterForm();
    this.filterObject = this._userListingService.createFilterObject(this.userListingForm);
  }

  ngOnInit() {
    console.log(this.userListingForm);

    if (this.isNotification) {
      this.displayedColumns.splice(0, 0, 'action');
    } else {
      this.displayedColumns.push('action');
    }
    this.fetchUserList();
  }



  /*
      Fetching user list after applying filters and pagination
  */

  fetchUserList() {
    let data = { ...this.userListingForm.value, ...this.validPageOptions };
    this._userListingService.getUserListing(data).subscribe(
      (response) => {
        console.log(response);
        if (response) {
          this.selection = new SelectionModel<any>(true, []);
          this.userList = new MatTableDataSource(response.data.data);
          this.total = response.data.total
        }
      }
    )
  }

  /*
    Method For Sorting
  */
  sortData(event) {
    console.log(event)
    this.sortOptions = event;
    this.resetPages();
    this.fetchUserList();

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
    this.fetchUserList();
  }

  /*
    Method For Searching
  */
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.fetchUserList();
  }



  /*
    Method For Checking Filter Button Shoud Be Enable Or Not
  */
  disable() {
    return !this.userListingForm.dirty;
  }

  /*
    Method For Resetting The Filters
  */
  resetFilter() {
    this.minDate = null;
    this.userListingForm.reset();
    this.resetPages();
    this.fetchUserList();
  }

  /*
    Method For Applying The Filters
  */

  filter() {
    this.resetPages();
    this.fetchUserList();
  }

  /*
    Method For Changing Status Of The User ( BLOCK,UNBLOCK,DELETE ) 
  */
  changeStatus(status, userId) {
    const body = {
      status: status,
      userId: userId
    }
    this._userListingService.changeStatus(body).subscribe(
      data => {
        if (data) {
          this.fetchUserList();
        }
      }
    )
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.userList.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.userList.data.forEach(row => this.selection.select(row));
  }

}


