import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
  sn: string;
  eId: string;
  sDate: string;
  eDate: string;
  duration: string;
  printer: string;
  status: string;
}


/** Constants used to fill up our data base. */
const EXPID: string[] = [
  'EX1234', 'EX4321', 'EX5436', 'EX7654', 'EX7876', 'EX0983', 'EX0876', 'EX5436', 'EX1567', 'EX7872',
  'EX5427', 'EX8709', 'EX6709'
];
const STATUS: string[] = [
  'Complete', 'Ongoing'
];

const PRINTER: string[] = [
  'BIOX', 'BIOX6', 'INKREDIBLE'
];


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss', '../../../../../components/mat-table-rendered/mat-table-rendered.component.scss']
})
export class UserDetailComponent implements OnInit {

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  displayedColumns: string[] = ['sn', 'eId', 'sDate', 'eDate', 'duration', 'printer', 'status'];

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => this.createNewExperiment(k + 1));

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
  createNewExperiment(id: number): UserData {
    const eid = EXPID[Math.floor(Math.random() * EXPID.length)];
    const printer = PRINTER[Math.floor(Math.random() * PRINTER.length)]
    const status = STATUS[Math.floor(Math.random() * STATUS.length)]


    return {
      sn: id.toString(),
      eId: eid,
      eDate: Math.round(Math.random() * 100).toString(),
      sDate: Math.round(Math.random() * 100).toString(),
      duration: Math.round(Math.random() * 100).toString(),
      printer: printer,
      status: status,
    };
  }
}
