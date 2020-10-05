import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatDialog } from '@angular/material';
// import { Pagination } from './../../constants/paginator';
import { TableService } from './table.service';
import { Pagination } from 'src/app/models/pagination';
import { TABLE_MESSAGES } from 'src/app/constant/messages/messages';
import { ConfirmationModalComponent } from 'src/app/modules/shared/components/confirmation-modal/confirmation-modal.component';
// import { TABLE_MESSAGESS } from 'src/app/constants/messages';


const ELEMENT_DATA = [];

@Component({
  selector: 'mat-table-rendered',
  templateUrl: './mat-table-rendered.component.html',
  styleUrls: ['./mat-table-rendered.component.scss']
})
export class MatTableRenderedComponent extends Pagination implements OnInit, OnDestroy {
  tableRenderSub: Subscription;
  matHeaderRow: any = [];
  numberOfData: number;
  isFilterOpen: boolean;
  @Input() Template: TemplateRef<any>;
  @Input() heading: any = [];
  @Input() cls: string;
  @Input() placeholder: string;
  @Input() input: string;
  @Input() paginationOn = true;
  @Output() option: EventEmitter<any> = new EventEmitter();
  @Output() status: EventEmitter<any> = new EventEmitter();
  @Output() tableEvent: EventEmitter<any> = new EventEmitter();
  @Output() filter: EventEmitter<any> = new EventEmitter();
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private _tableService: TableService,
    private _dialog: MatDialog,
  ) {
    super();
  }

  ngOnInit() {
    this.matHeaderRow.push('S.No.');
    this.heading.forEach(item => {
      this.matHeaderRow.push(item.heading);
    });
    this.heading.push({ heading: 'S.No.', key: 's_no' });
    this.tableRenderEvent();
  }

  ngOnDestroy() {
    if (this.tableRenderSub) {
      this.tableRenderSub.unsubscribe();
    }
  }

  tableRenderEvent() {
    this.tableRenderSub = this._tableService.tableObserve.pipe().subscribe(response => {
      response.data.forEach((list, index) => {
        list.s_no = response.limit * (response.page - 1) + (index + 1);
      });
      this.numberOfData = response.total;
      this.dataSource = new MatTableDataSource(response.data);
      this.total = response.total;
      this.limit = response.limit;
    });
  }

  /***********************************************************************************************************
   *
   * ************************************************************************************************************/

  /*
   * @param id {0=DELETE, 1=BLOCK,UNBLOCK, 2= EDIT}
   * @param data
   * @param index
   */
  tableAction(id: number, data: any, index: number) {
    const body = {
      id,
      index,
      data
    };
    console.log(body, '........................');
    switch (id) {
      case 2:
        this.status.emit(body);
        break;
      default:
        this.confirmationPopup(body);
        break;
    }
  }

  confirmationPopup(body: any) {
    let message = TABLE_MESSAGES.DELETE_LIST;
    let title = TABLE_MESSAGES.DELETE;
    body.action = this.API_EVENT.DELETED;
    if (body.id === 1) {
      console.log(body.data.status);
      if (body.data.status === 1) {
        message = TABLE_MESSAGES.INACTIVE_LIST;
        title = TABLE_MESSAGES.INACTIVE;
        body.action = this.API_EVENT.INACTIVE;
      } else {
        console.log('kkkk');
        message = TABLE_MESSAGES.ACTIVE_LIST;
        title = TABLE_MESSAGES.ACTIVE;
        body.action = this.API_EVENT.ACTIVE;
      }
    }
    const dialogRef = this._dialog.open(ConfirmationModalComponent, {
      data: { title, message }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.status.emit(body);
      }
    });
  }

  optional(clickType: string) {
    this.option.emit({ type: clickType });
  }

  searchEvent(search: string) {
    this.tableEvent.emit({ type: 'SEARCH', data: search });
  }

  onPageHandler(event: any) {
    this.tableEvent.emit({ type: 'PAGINATOR', data: event });
  }

  openFilter() {
    this.isFilterOpen = !this.isFilterOpen;
    this.optional('FILTER');
  }

  /**
   * @param id {0=reset, 1 apply}
   */
  filterOption(id: number) {
    this.isFilterOpen = !this.isFilterOpen;
    this.filter.emit(id);
  }

  sortingData(event) {
    
    for (let find = 0; find < this.heading.length; find++) {
      if (this.heading[find].heading === event.active) {
        event.active = this.heading[find].key;
        break;
      }
    }
    this.tableEvent.emit({ type: 'SORT', data: event });
  }

}
