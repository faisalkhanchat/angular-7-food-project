import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  sn: string;
  fId: string;
  userName: string;
  deviceType: string;
  fDate: string;
}

/** Constants used to fill up our data base. */
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const DEVICES: string[] = [
  'BIOX', 'BIOX6', 'INKREDIBLE'
];

const DATE: string[] = ['10/10/2019', '06/06/2019', '08/08/2018', '10/09/2019', '30/11/2018', '09/02/2019', '25/06/2018']

@Component({
  selector: 'app-feedback-listing',
  templateUrl: './feedback-listing.component.html',
  styleUrls: ['./feedback-listing.component.scss']
})
export class FeedbackListingComponent implements OnInit {

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ['sn', 'fId', 'userName', 'deviceType', 'fDate'];


  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => this.createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Builds and returns a new User. */
  createNewUser(id: number): UserData {
    const userName = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    const deviceType = DEVICES[Math.floor(Math.random() * DEVICES.length)]
    const fDate = DATE[Math.floor(Math.random() * DATE.length)]

    return {
      sn: id.toString(),
      userName: userName,
      fId: Math.round(Math.random() * 100).toString(),
      deviceType: deviceType,
      fDate: fDate
    };
  }


}
