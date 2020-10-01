import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-firebase-crud',
  templateUrl: './angular-firebase-crud.component.html',
  styleUrls: ['./angular-firebase-crud.component.scss']
})
export class AngularFirebaseCrudComponent implements OnInit {

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {


  }



  createRecord() {
    let record = {
      name: 'Faisal khan',
      mobile: '9873635068',
      email: 'faisalkhan.chat@gmail.com',
      password: 'ertyuiosdfghjk'
    };

    this.crudService.create_user(record).then(resp => {
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }


}
