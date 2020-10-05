import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../../../shared/services/data-transfer.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  profileDetail;
  constructor(
    private _dataService:DataTransferService
  ) { }

  ngOnInit() {
    this.getDetail();
  }

  /**
   * Getting Admin Profile Detail
   */
  getDetail() {
    this._dataService.getProfileDetail()
    .subscribe(
      (response:any) => {
        console.log(response)
        this.profileDetail = response.data;
      }
    )
  }
}
