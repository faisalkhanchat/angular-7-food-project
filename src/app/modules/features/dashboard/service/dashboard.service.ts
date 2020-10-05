import { Injectable } from '@angular/core';
import { UtilityService } from '../../../shared/services/utility.service';
import { FormService } from '../../../shared/services/form.service';
import { HttpService } from '../../../shared/services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private _utilityService: UtilityService,
    private _formService: FormService,
    private _http: HttpService,
    private _formBuilder: FormBuilder
  ) { }

  getFilterForm() {
    return this._formBuilder.group(
      this._formService.getFilterFormControls(['fromDate', 'toDate', 'durationType'])
    )
  }

  createFilterObject(form: FormGroup) {
    return {
      registrationDate: {
        fromDate: form.controls.fromDate,
        toDate: form.controls.toDate
      },
      durationType: {
        list: [
          { viewValue: 'Daily', value: 'daily' },
          { viewValue: 'Weekly', value: 'weekly' },
          { viewValue: 'Monthly', value: 'monthly' },
          { viewValue: 'Yearly', value: 'yearly' }
        ],
        control: form.controls.durationType
      }
    }
  }
}
